import React, { Component, Fragment, useState } from 'react'
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { setUserDetails } from '../actions/user'
import PropTypes from 'prop-types';

const AccountDetailsForm = ({ user, setUserDetails }) => {

  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const history = useHistory();

  const saveAndContinue = (e) => {
    e.preventDefault();
    setUserDetails({firstName, lastName, email});
    history.push('/shipping');
  }

  const backToEditor = (e) => {
    e.preventDefault();
    history.push('/editor')
  }

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
                      <input type="text" class="form-control" id="first-name" onChange={(e) => setFirstName(e.target.value)}></input>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="form-group">
                      <label for="last-name">Last Name</label>
                      <input type="text" class="form-control" id="last-name" onChange={(e => setLastName(e.target.value))}></input>
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <label for="email">Email Address</label>
                  <input type="email" id="email" class="form-control" onChange={(e) => setEmail(e.target.value)}></input>
                </div>
                <div class="row d-flex justify-content-between">
                <button class="btn btn-primary bg-white text-primary" type="submit" onClick={(e) => backToEditor(e)}>Back to editor</button>
                <button class="btn btn-primary" type="submit" onClick={(e) => saveAndContinue(e)}>Save and continue</button>

                </div>
              </form>
              </div>
              
            </Fragment>
        )
}
const mapStateToProps = (state) => ({
  user: state.user
})

AccountDetailsForm.propTypes = {
  user: PropTypes.object.isRequired,
  setUserDetails: PropTypes.func.isRequired
} 

export default connect(mapStateToProps, { setUserDetails })(AccountDetailsForm);
