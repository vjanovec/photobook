import React, { Component, Fragment, useState } from "react";
import { connect } from 'react-redux';
import { setShipping } from '../actions/user';
import PropTypes from 'prop-types'
import { useHistory } from "react-router-dom";

const ShippingDetails = ({ user, setShipping }) => {

  const [address_l1, setAddress_l1] = useState(null)
  const [address_l2, setAddress_l2] = useState(null)
  const [city, setCity] = useState(null)
  const [country, setCountry] = useState(null)
  const [zipcode, setZipcode] = useState(null)

  const history = useHistory()

  const saveAndContinue = (e) => {
    e.preventDefault();
    setShipping({address_l1, address_l2, city, country, zipcode});
    history.push('/payment');
  }

  const backToAccountDetails = (e) => {
    e.preventDefault();
    history.push('/account')
  }
  return (
    <Fragment>
      <div className="card card-body shadow-sm h-100">
        <div class="row mb-lg-5">
          <div class="col">
            <h3>Shipping Details</h3>
          </div>
        </div>
        <form>
          <div class="form-group">
            <label for="address-line-1">Address Line 1</label>
            <input
              type="text"
              class="form-control"
              id="address-line-1"
              onChange={(e) => setAddress_l1(e.target.value)}
            ></input>
          </div>
          <div class="form-group">
            <label for="address-line-2">Address Line 2</label>
            <input
              type="text"
              class="form-control"
              id="address-line-2"
              onChange={(e) => setAddress_l2(e.target.value)}
            ></input>
          </div>
          <div class="row">
            <div class="col-6">
              <div class="form-group">
                <label for="town">Town / City</label>
                <input
                  type="text"
                  class="form-control"
                  id="town"
                  onChange={(e) => setCity(e.target.value)}
                ></input>
              </div>
            </div>
            <div class="col-6">
              <div class="form-group">
                <label for="country">Country</label>
                <input
                  type="text"
                  class="form-control"
                  id="country"
                  onChange={(e) => setCountry(e.target.value)}
                ></input>
              </div>
            </div>
          </div>

          <div class="form-group">
            <label for="zip">ZIP code</label>
            <input type="text" class="form-control" id="zip" onChange={(e) => setZipcode(e.target.value)}></input>
          </div>
          <div class="row d-flex justify-content-between">
            <button
              class="btn btn-primary bg-white text-primary"
              
              type="submit" onClick={e => backToAccountDetails(e)}
            >
              Back
            </button>
            <button class="btn btn-primary" type="submit" onClick={e => saveAndContinue(e)}>
              Save & Continue
            </button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};
const mapStateToProps = (state) => ({
  user: state.user
});

ShippingDetails.propTypes = {
  setShipping: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
}


export default connect(mapStateToProps, { setShipping })(ShippingDetails);
