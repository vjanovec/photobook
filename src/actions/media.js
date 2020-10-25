import axios from 'axios';
// import Fb from '../Firebase';
import store from '../store';
import { useContext } from 'react';
import { FirebaseContext } from "../Firebase";
import { v4 as uuidv4 } from 'uuid';

import {
    IG_USER_MEDIA,
    IG_USER_MEDIA_ERROR,
    GALLERY_MEDIA,
    GALLERY_MEDIA_ERROR,
    SELECT_PHOTO
} from './types';
import { storage } from 'firebase';

export const getIgUserMedia = (idToken, fb) => async dispatch => {
    try {
        const res = await axios({
            method: 'POST',
            url: 'https://us-central1-photobook-b74d7.cloudfunctions.net/getUserMedia',
            data: {
                token: idToken
            },
            headers: { contentType: 'application/json' },
        })
        const imgRefs = await Promise.all(res.data.data.map(post => {
            return new Promise(async (resolve, reject) => {
                try {
                    const ref = post.public_url;
                    const imgId = ref.slice(21)
                    const url = await fb.getStorage().refFromURL(`gs://photobook-media/${imgId}`).getDownloadURL();
                    post.url = url
                    post.type = 'instagram'
                    var thumbnail_url = null;
                const retry = setInterval(async() => {
                    if(!thumbnail_url) {
                        thumbnail_url = await fb.getStorageRef().child(`thumbnails/${imgId}_200x200`).getDownloadURL()    
                    } else {
                        clearInterval(retry);
                        post.thumbnail_url = thumbnail_url
                        resolve(post)
                    }
                }, 1000)
                    
                } catch (err) {
                    reject(err)
                    console.log(err);
                }
            })
        }))
        console.log(imgRefs);
        dispatch({
            type: IG_USER_MEDIA,
            payload: { userMedia: res.data }
        })
    } catch (err) {
        console.log(err);
        dispatch({
            type: IG_USER_MEDIA_ERROR,
            payload: err
        })
    }
}

export const galleryUploadImages = (images, fb) => async dispatch => {
    try {
        const userUid = store.getState().auth.userUid;
        const storageRef = fb.getStorageRef();
        console.log(storageRef);
        const promises = images.map((img) => {
            const id = uuidv4()
            const imagePath = `${userUid}_${id}`;
            console.log(imagePath);
            const uploadTask = storageRef.child(imagePath).put(img);
            uploadTask.on("state_changed", snapshot => {
                console.log(snapshot)
            }, error => {
                console.log(error)
            }, async () => {
                const url = await storageRef.child(`${imagePath}`).getDownloadURL()
                
                var thumbnail_url = null;
                const retry = setInterval(async() => {
                    if(!thumbnail_url) {
                        thumbnail_url = await storageRef.child(`thumbnails/${imagePath}_200x200`).getDownloadURL()    
                    } else {
                        dispatch({
                            type: GALLERY_MEDIA,
                            payload: { url, id, public_url: `gs://photobook-media/${imagePath}`, type: 'gallery', thumbnail_storage_url: `gs://photobook-media/thumbnails/${imagePath}_200x200`, thumbnail_url, }
                        })
                        clearInterval(retry);
                    }
                }, 1000)
                    
                })
                
                // const thumbnail_url = null;
            })        
                
    const uploadedImages = await Promise.all(promises);
    console.log(uploadedImages);


} catch (err) {
    console.log(err)
    dispatch({
        type: GALLERY_MEDIA_ERROR,
        payload: err
    })
}
}

export const selectPhoto = (index, element) => dispatch => {
    if(element.selected) {
        element.selected = false;
    } else {
        element.selected = true;
    }
    dispatch({
        type: SELECT_PHOTO,
        payload: { index, element }
    })
}

// const galleryUploadImage = (img, fb, userUid, storageRef) => async dispatch => {
//     return new Promise(() => {
//         const imagePath = `images/${userUid}_${uuidv4()}`;
//         console.log(imagePath);
//         const uploadTask = storageRef.child(imagePath).put(img);
//         uploadTask.on("state_changed", snapshot => {
//             console.log(snapshot)
//         }, error => {
//             console.log(error)
//         }, () => {
//             storageRef.child(imagePath).getDownloadURL()
//                 .then(url => {
//                     console.log(url)
//                     dispatch({
//                         type: GALLERY_MEDIA,
//                         payload: { url }
//                     })
//                 })
//         });
//     })
// }