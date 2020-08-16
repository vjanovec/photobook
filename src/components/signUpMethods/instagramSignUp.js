import React, { Component } from 'react';
import imgInstagramTextLogo from "../../assets/img/instagram-text-logo.png";


const instagramSignUp = () => {
        return (
            <div class="card card-body shadow">
                    <h1 class="h5 text-center">Sign up with Instagram</h1>
                    <div class="text-center text-small mb-3">I want to use photos from my Instagram too</div>
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
                      <button class="btn btn-primary btn-block" type="submit">
                        Verify Instagram account
                      </button>
                  </div>
        )
}

export default instagramSignUp;