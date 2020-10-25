const functions = require("firebase-functions");
const axios = require("axios");
const qs = require("querystring");

// Import Admin SDK

var admin = require("firebase-admin");

const { Storage } = require("@google-cloud/storage");
const http = require("http");
const fs = require("fs");

const { resolve } = require("path");

var serviceAccount = require("./photobook-b74d7-firebase-adminsdk-64n5q-d40ce57c41.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://photobook-b74d7.firebaseio.com"
});


const db = admin.database();

const cors = require("cors")({
  origin: true,
});

const storage = new Storage("service-742976003510@gs-project-accounts.iam.gserviceaccount.com");
const bucketName = "photobook-media";

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
const instagramAppConfig = {
  client_id: "745166656311612",
  client_secret: "661d6e7281343244922bd2552ece5d3b",
  grant_type: "authorization_code",
  redirect_uri: "https://photobook-b74d7.web.app/verifyig/",
};

exports.getAccessToken = functions.https.onRequest((request, response) => {
  cors(request, response, async () => {
    const requestParameters = request.body;
    const code = requestParameters.code;
    const username = requestParameters.username;
    functions.logger.info(username, code, { structuredData: true });

    var access_token;
    var user_id;

    if (username && code) {
      const {
        client_id,
        client_secret,
        grant_type,
        redirect_uri,
      } = instagramAppConfig;
      try {
        const res = await axios({
          url: "https://api.instagram.com/oauth/access_token",
          method: "POST",
          methods: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          data: qs.stringify({
            client_id: client_id,
            client_secret: client_secret,
            grant_type: grant_type,
            redirect_uri: redirect_uri,
            code: code,
          }),
        });
        access_token = res.data.access_token;
        user_id = res.data.user_id;
        // response.status(200).send(res);
        if (!access_token || !user_id) {
          functions.logger.info("Error - ", { structuredData: true });
          return response.status(500).json({
            error_type: "Internal Server Error",
            code: 500,
            error_message: "Access token or code is not valid",
          });
        }
      } catch (err) {
        if (err) {
          functions.logger.info("Error - " + err, { structuredData: true });
          return response.status(400).json({
            error_type: "Internal Server Error",
            code: 400,
            error_message: "Instagram oauth failed",
            error: err,
          });
        }
      }
      // response.status(200).json({"result": "success"})
      const uid = user_id.toString();
      const additionalClaims = {
        username,
        access_token,
        alg: "RS256",
      };
      try {
        functions.logger.info("UID - " + uid, { structuredData: true });
        const token = await admin
          .auth()
          .createCustomToken(uid, additionalClaims);

        // TODO: Send token back to client side - RESPONSE
        // TODO: Save user to database

        // SAVE DATETIME
        const currentdate = new Date();
        const datetime =
          currentdate.getDate() +
          "/" +
          (currentdate.getMonth() + 1) +
          "/" +
          currentdate.getFullYear() +
          " @ " +
          currentdate.getHours() +
          ":" +
          currentdate.getMinutes() +
          ":" +
          currentdate.getSeconds();

        // SET UP REFERENCE
        const ref = db.ref("app/users");

        try {
          ref.child(user_id).once("value", (snapshot) => {
            // DB CONTAINS VALUE
            if (snapshot.exists()) {
              ref.child(user_id).set({
                username,
                code,
                access_token,
                lastAction: "LogIn",
                lastVisitTime: datetime,
              });
            } else {
              ref.child(user_id).set({
                username,
                code,
                access_token,
                // NEW USER
                lastAction: "SignUp",
                lastVisitTime: datetime,
              });
            }
            return response.status(201).json({
              token: token,
            });
          });
        } catch (err) {
          if (err) {
            functions.logger.info("Error - " + err, { structuredData: true });
            response.status(500).json({
              error_type: "Internal Server Error",
              code: 500,
              error_message: "Failed to retrieve or set data.",
              error: err,
            });
          }
        }
      } catch (err) {
        functions.logger.info("Error - " + err, { structuredData: true });
        response.status(500).json({
          error_type: "Internal Server Error",
          code: 500,
          error_message: "Failed to create token",
          error: err,
        });
      }
    } else {
      return response.status(400).json({
        error_type: "Invalid input",
        code: 400,
        error_message: "Username or code is not valid",
      });
    }
    return;
  });
});

exports.getUserProfile = functions.https.onRequest((request, response) => {
  cors(request, response, async () => {
    const token = request.body.token;

    try {
      const decodedToken = await admin.auth().verifyIdToken(token);
      functions.logger.info("Authorized", { structuredData: true });

      let uid = decodedToken.uid;
      // functions.logger.info(uid, { structuredData: true });
      const user_id = uid;
      const access_token = decodedToken.access_token;
      // functions.logger.info("Access token " + access_token, { structuredData: true });

      // if(!decodedToken || !user_id || !access_token) {
      //     // TODO: 400 error exception
      //     throw new Error("Authorization error");
      // }

      try {
        const result = await axios({
          url: "https://graph.instagram.com/me",
          params: {
            fields: "account_type,id,media_count,username",
            access_token: access_token,
          },
          method: "GET",
        });
        const account = result.data;
        // SEND RESPONSE
        response.status(200).json(account);

        // SAVE
        // SET UP REFERENCE
        const ref = db.ref("app/users");

        // SAVE DATETIME
        const currentdate = new Date();
        const datetime =
          currentdate.getDate() +
          "/" +
          (currentdate.getMonth() + 1) +
          "/" +
          currentdate.getFullYear() +
          " @ " +
          currentdate.getHours() +
          ":" +
          currentdate.getMinutes() +
          ":" +
          currentdate.getSeconds();

        try {
          ref.child(user_id).once("value", (snapshot) => {
          ref.child(user_id).set({
            access_token,
            lastVisitTime: datetime,
            profile: account,
            media: snapshot.val().media
          });
          });
        } catch (err) {
          if (err) {
            // TODO: IMPLEMENT ERROR
            response.status(500).json({
              error_type: "Internal Server Error",
              code: 500,
              error_message: "Firebase database saving exception",
              error: err,
            });
          }
        }
      } catch (err) {
        if (err) {
          // TODO: IMPLEMENT ERROR
          response.status(500).json({
            error_type: "Internal Server Error",
            code: 500,
            error_message: "Failed fetching data",
            error: err,
          });
        }
      }

      // EXAMPLE OUTPUT / SUCCESS
      // {
      //     "account_type": "PERSONAL",
      //     "id": "17841403337246922",
      //     "media_count": 6,
      //     "username": "vojtech.janovec"
      // }

      // EXAMPLE OUTPUT // FAILED
      // {
      //     "error": {
      //         "message": "Failed to decrypt",
      //         "type": "OAuthException",
      //         "code": 190,
      //         "fbtrace_id": "AyXTPzs625zOc3_Biya5zET"
      //     }
      //
    } catch (err) {
      if (err) {
        response.status(401).json({
          error_type: "Authentication error, Unauthorized",
          code: 401,
          error_message: "Failed to verify token",
          error: err,
        });
      }
    }
  });
});

exports.getUserMedia = functions.https.onRequest((request, response) => {
  cors(request, response, async () => {
    const token = request.body.token;

    try {
      const decodedToken = await admin.auth().verifyIdToken(token);
      functions.logger.info("Authorized", { structuredData: true });

      let uid = decodedToken.uid;
      // functions.logger.info(uid, { structuredData: true });
      const user_id = uid;
      const access_token = decodedToken.access_token;

      try {
        const result = await axios({
          url: `https://graph.instagram.com/me/media?fields=id,caption,media_url,media_type,username&access_token=${access_token}`,
          method: "GET",
          // headers: {
          //     'Content-Type': 'application/x-www-form-urlencoded'
          // },
          // data: qs.stringify(
          //     {
          //         fields: 'id, caption, media_url',
          //         access_token: access_token,
          //     }
          // )
        });
        const data = result.data;
        // await Promise.all(
        //   data.map(async (media) => {
        //     return new Promise(async (resolve, reject) => {
        //       try {
        //         if (media.media_type === "CAROUSEL_ALBUM") {
        //           const carouselItems = await getCarouselMedia(
        //             media.id,
        //             access_token
        //           );
        //           await Promise.all(
        //             carouselItems.data.data.map(async (carouselMedia) => {
        //               return new Promise(async (resolve, reject) => {
        //                 try {
        //                   const carouselItemRes = await getMediaById(
        //                     carouselMedia.id,
        //                     access_token
        //                   );
        //                   data.splice(
        //                     data.indexOf(media) + 1,
        //                     0,
        //                     carouselItemRes.data
        //                   );
        //                   functions.logger.info(carouselItemRes.data, {
        //                     structuredData: true,
        //                   });
        //                   resolve(carouselItemRes.data);
        //                 } catch (err) {
        //                   if (err) {
        //                     reject(err);
        //                   }
        //                 }
        //               });
        //             })
        //           );

        //           // EXAMPLE OUTPUT DATA
        //           //   {
        //           //     "data": [
        //           //         {
        //           //             "id": "17925586999145210"
        //           //         },
        //           //         {
        //           //             "id": "17912898061195831"
        //           //         },
        //           //         {
        //           //             "id": "17954815066044757"
        //           //         },
        //           //         {
        //           //             "id": "17881422685230428"
        //           //         },
        //           //         {
        //           //             "id": "17953925008020029"
        //           //         }
        //           //     ]
        //           // }
        //         } else if (media.media_type === "IMAGE") {
        //           // NOTHING
        //         } else {
        //           // REMOVE FROM LIST
        //           const index = data.index.of(media);
        //           data.splice(index, 1);
        //         }
        //         media.storage_url = `gs://${bucketName}/${media.id}`;
        //         resolve(media);
        //       } catch (err) {
        //         if (err) {
        //           reject(err);
        //           functions.logger.info(err, { structuredData: true });
        //           response.status(500).json({
        //             error_type: "Internal Server Error",
        //             code: 500,
        //             error_message: "Failed fetching carousel items",
        //             error: err,
        //           });
        //         }
        //       }
        //     });
        //   })
        // );

        // new version
        /*
        await getAllMedia(data, access_token).catch(err => {
          response.status(500).json({
            error_type: "Internal Server Error",
            code: 500,
            error_message: "Failed fetching carousel items",
            error: err,
          });
        })
        */

        

        await saveImages(data.data);

        // SAVE
        // SET UP REFERENCE
        const ref = db.ref("app/users");

        // SAVE DATETIME
        const currentdate = new Date();
        const datetime =
          currentdate.getDate() +
          "/" +
          (currentdate.getMonth() + 1) +
          "/" +
          currentdate.getFullYear() +
          " @ " +
          currentdate.getHours() +
          ":" +
          currentdate.getMinutes() +
          ":" +
          currentdate.getSeconds();

        try {
          ref.child(user_id).once("value", (snapshot) => {
          ref.child(user_id).set({
            access_token,
            lastVisitTime: datetime,
            media: data,
            profile: snapshot.val().profile
          });
          });
          // SEND RESPONSE
        response.status(200).json(data);
        } catch (err) {
          if (err) {
            // TODO: IMPLEMENT ERROR
            response.status(500).json({
              error_type: "Internal Server Error",
              code: 500,
              error_message: "Firebase database saving exception",
              error: err,
            });
          }
        }
      } catch (err) {
        if (err) {
          // TODO: IMPLEMENT ERROR
          response.status(500).json({
            error_type: "Internal Server Error",
            code: 500,
            error_message: "Failed fetching data",
            error: err,
          });
        }
      }
    } catch (err) {
      if (err) {
        response.status(401).json({
          error_type: "Authentication error, Unauthorized",
          code: 401,
          error_message: "Failed to verify token",
          error: err,
        });
      }
    }
  });
});


exports.getMediaByLink = functions.https.onRequest((request, response) => {
  cors(request, response, async () => {
    const token = request.body.token;
    const link = request.body.link;

    try {
      const decodedToken = await admin.auth().verifyIdToken(token);
      functions.logger.info("Authorized", { structuredData: true });

      let uid = decodedToken.uid;
      // functions.logger.info(uid, { structuredData: true });
      const user_id = uid;
      const access_token = decodedToken.access_token;

      try {
        const result = await axios({
          url: link,
          method: "GET",
        
        });
        const data = result.data;

        await saveImages(data.data);

        // SAVE
        // SET UP REFERENCE
        const ref = db.ref("app/users");

        // SAVE DATETIME
        const currentdate = new Date();
        const datetime =
          currentdate.getDate() +
          "/" +
          (currentdate.getMonth() + 1) +
          "/" +
          currentdate.getFullYear() +
          " @ " +
          currentdate.getHours() +
          ":" +
          currentdate.getMinutes() +
          ":" +
          currentdate.getSeconds();

        try {
          ref.child(user_id).once("value", (snapshot) => {
            const value = snapshot.val();
            const allMedia = [];
            allMedia.push(value.media);
            allMedia.push(data)
          ref.child(user_id).set({
            access_token,
            lastVisitTime: datetime,
            media: allMedia,
            profile: value.profile
          });
          });
          // SEND RESPONSE
        response.status(200).json(data);
        } catch (err) {
          if (err) {
            // TODO: IMPLEMENT ERROR
            response.status(500).json({
              error_type: "Internal Server Error",
              code: 500,
              error_message: "Firebase database saving exception",
              error: err,
            });
          }
        }



      } catch (err) {
        if (err) {
          
          response.status(500).json({
            error_type: "Internal Server Error",
            code: 500,
            error_message: "Failed fetching data",
            error: err,
          });
        }
      }

    } catch (err) {
      if (err) {
        response.status(401).json({
          error_type: "Authentication error, Unauthorized",
          code: 401,
          error_message: "Failed to verify token",
          error: err,
        });
      }
    }
  })
});





// const convertImagesToBase64 = async (images, user_id) => {
//   try {
//     await Promise.all(
//       images.map(async (media) => await convertImagesToBase64(media, user_id))
//     );
//   } catch (err) {
//     functions.logger.info(err, { structuredData: true });
//   }
//   return images;
// };
// let image = await axios.get('http://aaa.bbb/image.png', {responseType: 'arraybuffer'});
// let returnedB64 = Buffer.from(image.data).toString('base64');
// const convertImageToBase64 = (media, user_id) => {
//   return new Promise(async (resolve, reject) => {
//     try {
//       let image = await axios.get(media.media_url, {
//         responseType: "arraybuffer",
//       });
//       let returnedB64 = Buffer.from(image.data).toString("base64");
//       media.base64_img = returnedB64;
//       const url = await saveImage(media, user_id);
//       media.url = url;
//       resolve(media);
//     } catch (err) {
//       if (err) {
//         reject(err);
//       }
//     }
//   });
// };

const saveImages = async(images) => {
  try {
    return Promise.all(
      images.map(async (media) => {
        return await saveImage(media);
      })
    );
  } catch (err) {
    if (err) {
      functions.logger.info(err, { structuredData: true });
    }
  }
};

const saveImage = async(media) => {
  const myBucket = storage.bucket(bucketName);

  const file = myBucket.file(media.id);

  return new Promise(async (resolve, reject) => {
    const response = await axios({
      url: media.media_url,
      method: "GET",
      responseType: "stream",
    });

    response.data
      .pipe(
        file.createWriteStream({
          metadata: {
            contentType: "image/jpeg",
          },
        })
      )
      .on("error", function (err) {
        functions.logger.info(err, { structuredData: true });
        reject(err);
      })
      .on("finish", async  () => {
        // The file upload is complete.
        await file.makePublic().catch((err) => reject(err));
        media.public_url = `gs://${bucketName}/${media.id}`;

        // media.thumbnail_url = `gs://${bucketName}/${media.id}_320x320`
        resolve(media);
      });
  });
};
/*
const getCarouselMediaId = (media_id, access_token) => {
  return new Promise(async (resolve, reject) => {
    const media_id_str = media_id;
    try {
      const carouselItems = await axios({
        url: `https://graph.instagram.com/${media_id_str}/children`,
        method: "GET",
        params: {
          access_token: access_token,
        },
      });
      resolve(carouselItems);
    } catch (err) {
      if (err) {
        reject(err);
        functions.logger.info(err, { structuredData: true });
      }
    }
  });

};

const getMediaById = async(id, access_token) => {
  return axios({
    url: `https://graph.instagram.com/${id}`,
    params: {
      fields: "id,media_url,media_type,username",
      access_token: access_token,
    },
    method: "GET",
  });
};

const getAllMedia = (data, access_token) => {
  return Promise.all(
    data.map(async (media) => {
      try {
        await handleMediaTypes(data, media, access_token);
      } catch (err) {
        if(err) {
          functions.logger.info(err, {
            structuredData: true,
          });
          reject(err)
        }
      }
    })
  );
}

const handleMediaTypes = (data, media, access_token) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (media.media_type === "CAROUSEL_ALBUM") {
        const carouselItems = await getCarouselMediaId(
          media.id,
          access_token
        );
        await Promise.all(
          carouselItems.data.data.map((carouselMedia, access_token) => {
            
            return new Promise(async (resolve, reject) => {
              try {
                const carouselItemRes = await getMediaById(
                  carouselMedia.id,
                  access_token
                );
                data.splice(
                  data.indexOf(media) + 1,
                  0,
                  carouselItemRes.data
                );
                functions.logger.info(carouselItemRes.data, {
                  structuredData: true,
                });
                resolve(carouselItemRes.data);
              } catch (err) {
                if (err) {
                  reject(err);
                }
              }
            }).then((carouselItem) => {
              return resolve(carouselItem)
            }).catch(err => reject(err));
          })
        ).catch(err => reject(err));

        // EXAMPLE OUTPUT DATA
        //   {
        //     "data": [
        //         {
        //             "id": "17925586999145210"
        //         },
        //         {
        //             "id": "17912898061195831"
        //         },
        //         {
        //             "id": "17954815066044757"
        //         },
        //         {
        //             "id": "17881422685230428"
        //         },
        //         {
        //             "id": "17953925008020029"
        //         }
        //     ]
        // }
      } else if (media.media_type === "IMAGE") {
        // NOTHING
      } else {
        // REMOVE FROM LIST
        const index = data.index.of(media);
        data.splice(index, 1);
      }
      media.storage_url = `gs://${bucketName}/${media.id}`;
      resolve(media);
    } catch (err) {
      if (err) {
        functions.logger.info(err, { structuredData: true });
        reject(err);
      }
    }
  });
}
*/

// PAYMENTS


// Set your secret key. Remember to switch to your live secret key in production!
// See your keys here: https://dashboard.stripe.com/account/apikeys
const stripe = require('stripe')('sk_test_q57HQZHBzP3lpE3pZiX4ynAt00AxguFgxG');

// const paymentIntent = await stripe.paymentIntents.create({
//   amount: 1099,
//   currency: 'czk',
//   // Verify your integration in this guide by including this parameter
//   metadata: {integration_check: 'accept_a_payment'},
// });

const createIntent = async() => {
  return new Promise(async (resolve, reject) => {
    try {
      resolve(stripe.paymentIntents.create({
        amount: 20000,
        currency: 'czk',
        // Verify your integration in this guide by including this parameter
        metadata: {integration_check: 'accept_a_payment'},
      }));
    } catch (err) {
      if(err) {
        reject(err);
      }
    }
  })
}

const calculateOrderAmount = items => {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  return 1400;
};

exports.createPaymentIntent = functions.https.onRequest((request, response) => {
  cors(request, response, async () => {
    const { items } = request.body;
    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(items),
    currency: "usd"
  });
  response.status(200).json({clientSecret: paymentIntent.client_secret})
  })
})