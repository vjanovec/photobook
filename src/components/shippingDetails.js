import React, { Component, Fragment } from "react";

const shippingDetails = () => {
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
              value=""
            ></input>
          </div>
          <div class="form-group">
            <label for="address-line-2">Address Line 2</label>
            <input
              type="text"
              class="form-control"
              id="address-line-2"
              value=""
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
                  value=""
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
                  value=""
                ></input>
              </div>
            </div>
          </div>

          <div class="form-group">
            <label for="zip">ZIP code</label>
            <input type="text" class="form-control" id="zip" value=""></input>
          </div>
          <div class="row d-flex justify-content-between">
            <button
              class="btn btn-primary bg-white text-primary"
              
              type="submit"
            >
              Back
            </button>
            <button class="btn btn-primary" type="submit">
              Save & Continue
            </button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default shippingDetails;
