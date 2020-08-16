import React from 'react';
import imgMale1 from "../assets/img/avatars/male-1.jpg";
import imgMale4 from "../assets/img/avatars/male-4.jpg";
import imgIconCheck from "../assets/img/icons/interface/icon-check.svg";
import imgInstagramTextLogo from "../assets/img/instagram-text-logo.png";

const createAccount = () => {
        return (
            <section class="py-3">
            <div class="container mb-5">
              <div class="row justify-content-center">
                <div class="col-xl-4 col-lg-5 col-md-6 mb-3">
                  <div class="card card-body shadow">
                    <h1 class="h5 text-center">Sign up with Email</h1>
                    <div class="text-center text-small mb-3">I want to use only photos from my device</div>
                    <form>
                      <div class="form-group">
                        <input
                          type="email"
                          class="form-control"
                          name="sign-up-email"
                          placeholder="Email Address"
                        ></input>
                      </div>
                      <div class="form-group">
                        <input
                          type="password"
                          class="form-control"
                          name="sign-up-password"
                          placeholder="Password"
                        ></input>
                        <small>Password must be at least 8 characters</small>
                      </div>
                      <div class="form-group">
                        {/* <input
                          type="password"
                          class="form-control"
                          name="sign-up-password-confirm"
                          placeholder="Confirm Password"
                        ></input> */}
                      </div>
                      <div class="form-group">
                        <div class="custom-control custom-checkbox text-small">
                          <input
                            type="checkbox"
                            class="custom-control-input"
                            id="sign-up-agree"
                          ></input>
                          <label class="custom-control-label" for="sign-up-agree">
                            I agree to the{" "}
                            <a target="_blank" href="utility-legal-terms.html">
                              Terms &amp; Conditions
                            </a>
                          </label>
                        </div>
                      </div>
                      <button class="btn btn-primary btn-block" type="submit">
                        Create Account
                      </button>
                    </form>
                  </div>
                </div>
                <div class="col-xl-4 col-lg-5 col-md-6 ml-lg-5">
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
                  <div class="text-center text-small mt-3">
                    Already have an account?{" "}
                    <a href="account-sign-in-simple.html">Sign in here</a>
                  </div>
                
                  {/*<div class="mb-5">
                    <div class="mb-2 mb-md-4">
                      <div class="media rounded align-items-center pl-3 pr-3 pr-md-4 py-2 bg-white shadow-sm">
                        <img
                          src={imgMale4}
                          alt="Harvey Derwent avatar image"
                          class="avatar avatar-sm flex-shrink-0 mr-3"
                        ></img>
                        <div class="text-dark mb-0">
                          &ldquo;We are working at almost twice the
                          capacity&rdquo;
                        </div>
                      </div>
                    </div>
                    <div class="mb-2 mb-md-4">
                      <div class="media rounded align-items-center pl-3 pr-3 pr-md-4 py-2 bg-white shadow-sm">
                        <img
                          src={imgMale1}
                          alt="Harvey Derwent avatar image"
                          class="avatar avatar-sm flex-shrink-0 mr-3"
                        ></img>
                        <div class="text-dark mb-0">
                          &ldquo;Jumpstart increases productivity.&rdquo;
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="book-container">
                    <div class="book">
                      <div id="pages" class="pages">
                        <div class="page cover-front-f">
                          <img
                            src="https://picsum.photos/800/800"
                            class="flipbook-image"
                          ></img>
                        </div>
                        <div class="page cover-front-b">
                          <div class="cover-window"></div>
                        </div>
                        <div class="page first-page">
                          <img
                            src="https://picsum.photos/800/800"
                            class="flipbook-image"
                          ></img>
                        </div>
                        <div class="page">
                          <img
                            src="https://picsum.photos/800/800"
                            class="flipbook-image"
                          ></img>
                        </div>
                        <div class="page">
                          <img
                            src="https://picsum.photos/800/800"
                            class="flipbook-image"
                          ></img>
                        </div>
                        <div class="page">
                          <img
                            src="https://picsum.photos/800/800"
                            class="flipbook-image"
                          ></img>
                        </div>
                        <div class="page">
                          <img
                            src="https://picsum.photos/800/800"
                            class="flipbook-image"
                          ></img>
                        </div>
                        <div class="page">
                          <img
                            src="https://picsum.photos/800/800"
                            class="flipbook-image"
                          ></img>
                        </div>
                        <div class="page">
                          <img
                            src="https://picsum.photos/800/800"
                            class="flipbook-image"
                          ></img>
                        </div>
                        <div class="page">
                          <img
                            src="https://picsum.photos/800/800"
                            class="flipbook-image"
                          ></img>
                        </div>
                        <div class="page">
                          <img
                            src="https://picsum.photos/800/800"
                            class="flipbook-image"
                          ></img>
                        </div>
                        <div class="page">
                          <img
                            src="https://picsum.photos/800/800"
                            class="flipbook-image"
                          ></img>
                        </div>
                        <div class="page">
                          <img
                            src="https://picsum.photos/800/800"
                            class="flipbook-image"
                          ></img>
                        </div>
                        <div class="page">
                          <img
                            src="https://picsum.photos/800/800"
                            class="flipbook-image"
                          ></img>
                        </div>
                        <div class="page cover-back-f"></div>
                        <div class="page cover-back-b"></div>
                      </div>
                    </div>
                  </div>*/}
                  {/* <div>
                  <h2>All plans include:</h2>
                  <div class="mb-3">
                    <div class="d-flex align-items-center">
                      <div class="rounded-circle bg-success-alt">
                        <img src={imgIconCheck} alt="Binoculars icon" class="m-2 icon icon-xs"></img>
                      </div>
                      <h6 class="mb-0 ml-3">Fully Responsive</h6>
                    </div>
                  </div>
                  <div class="mb-3">
                    <div class="d-flex align-items-center">
                      <div class="rounded-circle bg-success-alt">
                        <img src={imgIconCheck} alt="Layouts icon" class="m-2 icon icon-xs"></img>
                      </div>
                      <h6 class="mb-0 ml-3">Multiple Layouts</h6>
                    </div>
                  </div>
                  <div class="mb-3">
                    <div class="d-flex align-items-center">
                      <div class="rounded-circle bg-success-alt">
                        <img src={imgIconCheck} alt="Box icon" class="m-2 icon icon-xs"></img>
                      </div>
                      <h6 class="mb-0 ml-3">Modular Components</h6>
                    </div>
                  </div>
                  <div class="mb-3">
                    <div class="d-flex align-items-center">
                      <div class="rounded-circle bg-success-alt">
                        <img src={imgIconCheck} alt="Lightning icon" class="m-2 icon icon-xs"></img>
                      </div>
                      <h6 class="mb-0 ml-3">Suits Your Style</h6>
                    </div>
                  </div>
                </div>*/}
                </div>
              </div>
            </div>
          </section>
        )
}

export default createAccount;