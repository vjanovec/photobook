import React, { Component, Fragment, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { signUpWithEmail, signInWithEmail } from "../../actions/auth";
import { FirebaseContext } from "../../Firebase";


const SignUp = ({ signUpWithEmail, signInWithEmail, auth: { userUid, email, error } }) => {
  const [formEmail, setFormEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [terms, setTerms] = useState(false);
  const [login, setLogin] = useState(false);
  const [loading, setLoading] = useState(false);

  const createAccountSubmit = (e, fb) => {
    e.preventDefault();
    if (terms) {
      signUpWithEmail(formEmail, password, terms, fb);
    } else {
      console.log("Accept the terms");
    }
  };

  const history = useHistory();

  const signInSubmit = (e, fb) => {
    e.preventDefault();
    signInWithEmail(formEmail, password, fb);
    history.push('/signedIn')
  };


  return (
    <div class="card card-body shadow overflow-hidden">
      <h2 class="h5 text-center">{login ? 'Sign in with Email' : 'Sign up with Email'}</h2>
      <div class="text-center text-small mb-3">
        Sign in with Email
          </div>
      {error ? <h2 class="h5 text-center bg-primary text-white mt-1 mb-1">{error.message}</h2> : null}
      <form>
        <div class="form-group">
          <input
            type="email"
            class="form-control"
            name="sign-up-email"
            placeholder="Email Address"
            onChange={(e) => setFormEmail(e.target.value)}
          ></input>
        </div>
        <div class="form-group">
          <input
            type="password"
            class="form-control"
            name="sign-up-password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          {login ? null : <small>Password must be at least 8 characters</small>}
        </div>
        {/* <div class="form-group">
                        <input
                          type="password"
                          class="form-control"
                          name="sign-up-password-confirm"
                          placeholder="Confirm Password"
                        ></input>
                      </div> */}
        {login ? (
          <FirebaseContext.Consumer>
            {(fb) => (
              <button
                class="btn btn-primary btn-block"
                type="submit"
                onClick={(e) => signInSubmit(e, fb)}
              >
                Sign in
              </button>
            )}
          </FirebaseContext.Consumer>
        ) : (
            <Fragment>
              <div class="form-group">
                <div class="custom-control custom-checkbox text-small">
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    id="sign-up-agree"
                    onChange={(e) => setTerms(e.target.checked)}
                  ></input>
                  <label class="custom-control-label" for="sign-up-agree">
                    I agree to the{" "}
                    <a target="_blank" href="utility-legal-terms.html">
                      Terms &amp; Conditions
                      </a>
                  </label>
                </div>
              </div>

              <FirebaseContext.Consumer>
                {(fb) => (
                  <button
                    class="btn btn-primary btn-block"
                    type="submit"
                    onClick={(e) => createAccountSubmit(e, fb)}
                  >
                    Create Account 
                  </button>
                )}
              </FirebaseContext.Consumer>
            </Fragment>
          )}
      </form>
      {login ? (
        <div class="text-center text-small mt-3">
          Dont have account yet?{" "}
          <a
            onClick={() => {
              setLogin(false);
              setTerms(false);
            }}
          >
            Sign up here
              </a>
        </div>
      ) : (
          <div class="text-center text-small mt-3">
            Already have an account?{" "}
            <a
              onClick={() => {
                setLogin(true);
                setTerms(true);
              }}
            >
              Sign in here
              </a>
          </div>
        )}
    </div>
  );
};

SignUp.propTypes = {
  signUpWithEmail: PropTypes.func.isRequired,
  signInWithEmail: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  galleryUploadImages: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { signUpWithEmail, signInWithEmail })(SignUp);
