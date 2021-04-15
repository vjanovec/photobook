import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


const signUpHeading = ({ auth: { userUid }}) => {   
        return (
            <Fragment>
            <h1 class="display-3">
              Upload your <mark>photos</mark>
            </h1>
            <p class="lead">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec quis nibh at felis congue commodo. Nam quis nulla. 
            </p>
            {/* <div class="row justify-content-center col-sm-12 col-xs-12 col-md-12 ml-auto mr-auto">
                    <div class="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-6 pl-2 pr-2 pt-2">
                      <Link to='/signup' class="btn btn-primary bg-light text-primary w-100">
                        SignUp
                      </Link>
                    </div>
            </div> */}
            {/* {userUid ? <Fragment>
                  <div class="row justify-content-center col-sm-12 col-xs-12 col-md-12 ml-auto mr-auto">
                    <div class="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12 pl-2 pr-2 pt-2">
                      <Link to='/editor' class="btn btn-primary bg-light text-primary w-100">
                        Editor
                      </Link>
                    </div>
                  </div>
            </Fragment> : <Fragment>
                    <p class="lead ml-lg-4">
                    Sign up with
                  </p>
                  <div class="row justify-content-center col-sm-12 col-xs-12 col-md-12 ml-auto mr-auto">
                    <div class="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-6 pl-2 pr-2 pt-2">
                      <Link to='/upload/gallery' class="btn btn-primary bg-light text-primary w-100">
                        Email
                      </Link>
                    </div>
                    <div class="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-6 pl-2 pr-2 pt-2">
                      <Link to="/upload/instagram" class="btn btn-primary w-100">
                        Instagram
                      </Link>
                    </div>
                  </div>
              </Fragment>} */}
              
          </Fragment>
        )  
}
const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps)(signUpHeading)
