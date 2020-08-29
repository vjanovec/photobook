import React, { Component, Fragment } from 'react'

const accountDetailsForm = () => {
        return (
            <Fragment>
                <div className="card card-body shadow-sm h-100">
              <div class="row mb-lg-5">
                <div class="col">
                  <h3>Account Details</h3>
                </div>
              </div>
              <form>
                <div class="row form-row ">
                  <div class="col-sm-6">
                    <div class="form-group">
                      <label for="first-name">First Name</label>
                      <input type="text" class="form-control" id="first-name" value="Andrew"></input>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="form-group">
                      <label for="last-name">Last Name</label>
                      <input type="text" class="form-control" id="last-name" value="Smith"></input>
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <label for="email">Email Address</label>
                  <input type="email" id="email" class="form-control"></input>
                  <small>Used to log in to your account</small>
                </div>
                <div class="row d-flex justify-content-between">
                <button class="btn btn-primary bg-white text-primary" type="submit">Back to editor</button>
                <button class="btn btn-primary" type="submit">Save and continue</button>

                </div>
              </form>
              </div>
              
            </Fragment>
        )
}

export default accountDetailsForm;
