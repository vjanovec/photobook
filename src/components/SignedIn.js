import React, { Component, Fragment, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { FirebaseContext } from "../Firebase";
import { galleryUploadImages } from "../actions/media";


const SignedIn = ({ galleryUploadImages, auth: { userUid, email, error }  }) => {
  const [login, setLogin] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e, fb) => {
    console.log('handle gallery')
    if(e.target.files) {
      const files = [];
      for(var i = 0; i < e.target.files.length; i++) {
        files.push(e.target.files[i]);
      }
      galleryUploadImages(files, fb);
      
    } else {
      console.log('Gallery images upload error')
    }
  }

  return (
    <div class="card card-body shadow overflow-hidden">
        <Fragment>
          <h2 class="h5 text-center">Upload photos</h2>
          <div class="text-center text-small mb-3">
            Welcome {email}
          </div>
          <h3 class="h5 text-center">You have loaded: </h3>
          <h3 class="h5 text-center"><span class="text-primary">0</span></h3>
          <div class="text-center text-small mb-3">
            Choose upload media
          </div>
          {/* <button
                class="btn btn-block btn-primary bg-light text-primary w-100"
              >Gallery
            </button> */}
                <FirebaseContext.Consumer>
            {(fb) => (
                <input type="file" multiple
                onChange={(e) => handleImageChange(e, fb)} className='w-100 h-100' className='custom-file-input-button'/>
            )}
            </FirebaseContext.Consumer>
            <Link
            to={{
              pathname: `https://api.instagram.com/oauth/authorize?client_id=${process.env.REACT_APP_IG_APP_ID}&redirect_uri=${process.env.REACT_APP_IG_CURRENT_DOMAIN}&scope=user_profile,user_media&response_type=code`,
            }}
            target= "_blank"
          >
            <button class="btn btn-primary btn-block mt-2" type="submit">
              Instagram Photos
            </button>
          </Link>
            
              {/* <button
                class="btn btn-primary btn-block bg-light text-primary w-100"
                type="submit"
                
              >
                Other Instagram account
                <div class="text-center text-small">No login required (max 12 photos)</div>
              </button>
              <button
                class="btn btn-primary btn-block bg-light text-primary w-100"
                type="submit"
                
              >
                Your Instagram account
                <div class="text-center text-small">Instagram login required</div>
              </button> */}
        </Fragment>
    </div>
  );
};

SignedIn.propTypes = {
  signUpWithEmail: PropTypes.func.isRequired,
  signInWithEmail: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  galleryUploadImages: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { galleryUploadImages })(SignedIn);
