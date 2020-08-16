import React, { Component } from 'react'

const emailSignUp = () => {
    
        return (
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
        ) 
}

export default emailSignUp;
