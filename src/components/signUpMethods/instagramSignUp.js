import React, { Component, Fragment, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { signUpWithInstagram } from "../../actions/auth";
import { Link } from "react-router-dom";
import imgInstagramTextLogo from "../../assets/img/instagram-text-logo.png";
import { FirebaseContext } from "../../Firebase";
import { getIgUserMedia, galleryUploadImage } from "../../actions/media";

// const username = "vojtech.janovec";
// const code =
//   "AQCYGmCjECjet6l5_eJjSTYhlPE5XqikzJXcAa7eFI2d-vjDppA82yOTW2XPYNwh2ZRd92FWBsIxV3I8o4APWu6PTDtky9xz0kqch-p-hiwmUFDArlaSzeiDrhZgKqz-GEkZLIs2N4LOGoxiMebxelR3T4vWahM_PjNq8YxIZHbcbzHSMjBIyaMZ1yGIs4dXACkAXVPP4o-Ojc3hmvHTgrxaYWbHNS6kN5GtIQUw9T52vw";

const InstagramSignUp = ({
  signUpWithInstagram,
  getIgUserMedia,
  galleryUploadImage,
  auth: { instagramProfile, idToken },
}) => {
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState(null);


  const dispatchIgUserMedia = (e) => {
    e.preventDefault();
    setLoading(true);
    getIgUserMedia(idToken);
  };

  const handleImageChange = (e, fb) => {
    if(e.target.files) {
      console.log(e.target.files);
      console.log(e.target.files[0]);
      galleryUploadImage(e.target.files[0], fb);
    } else {
      console.log('handleimagechange error')
    }
  }

  



  return (
    <div class="card card-body shadow">
      {instagramProfile ? (
        <Fragment>
          <h2 class="h5 text-center">Upload photos</h2>
          <div class="text-center text-small mb-3">
            Welcome {instagramProfile.username}
          </div>
          <h3 class="h5 text-center">You have loaded: </h3>
          <h3 class="h5 text-center text-primary">
            0 / {instagramProfile.media_count}
          </h3>
          {loading ? (
            <div class="loader">
              <div class="loading-animation"></div>
            </div>
          ) : (
            <Fragment>
              <div class="text-center text-small mb-3">Choose upload media</div>
              <button
                class="btn btn-primary btn-block text-white w-100"
                type="submit"
                onClick={(e) => dispatchIgUserMedia(e)}
              >
                Your Instagram account<br></br>
                <div class="text-center text-small">Max 24 images per load</div>
              </button>
              <button
                class="btn btn-block bg-light text-primary w-100"
                type="submit"
              >
                Other Instagram account
              </button>
              <button
                class="btn btn-block btn-primary bg-light text-primary w-100"
              >
                <FirebaseContext.Consumer>
            {(fb) => (
                <input type="file"
                onChange={(e) => handleImageChange(e, fb)} className='w-100 h-100'/>
            )}
            </FirebaseContext.Consumer>
                Gallery
              </button>
            </Fragment>
          )}
        </Fragment>
      ) : (
        <Fragment>
          <h2 class="h5 text-center">Sign up with Instagram</h2>
          <div class="text-center text-small mb-3">
            I want to use my Instagram photos
          </div>
          <div class="container-fluid d-flex justify-content-center">
            <div class="col-lg-8 col-md-8 col-sm-6 col-8">
              <img src={imgInstagramTextLogo} className="img-fluid"></img>
            </div>
          </div>
          <div class="custom-control custom-checkbox text-small">
            <input
              type="checkbox"
              class="custom-control-input"
              id="sign-up-agree"
            ></input>
          </div>
          {/* <FirebaseContext.Consumer>
            {(fb) => (
              <button
                class="btn btn-primary btn-block"
                type="submit"
                onClick={() => signUpWithInstagram(code, username, fb)}
              >
                Verify Instagram account
              </button>
            )}
          </FirebaseContext.Consumer> */}
          {/* `https://api.instagram.com/oauth/authorize?client_id=${appId}&redirect_uri=${redirectUri}&scope=user_profile,user_media&response_type=code` */}
          <Link
            to={{
              pathname: `https://api.instagram.com/oauth/authorize?client_id=${process.env.REACT_APP_IG_APP_ID}&redirect_uri=${process.env.REACT_APP_IG_CURRENT_DOMAIN}&scope=user_profile,user_media&response_type=code`,
            }}
            target= "_blank"
          >
            <button class="btn btn-primary btn-block" type="submit">
              Verify Instagram account
            </button>
          </Link>
        </Fragment>
      )}
    </div>
  );
};
InstagramSignUp.propTypes = {
  signUpWithInstagram: PropTypes.func.isRequired,
  getIgUserMedia: PropTypes.func.isRequired,
  galleryUploadImage: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {
  signUpWithInstagram,
  getIgUserMedia,
  galleryUploadImage
})(InstagramSignUp);
