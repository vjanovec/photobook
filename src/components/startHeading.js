import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

const startHeading = () => {
        return (  
        <Fragment>
          <div class="row section-title justify-content-center text-center">
            <h3 class="display-3">Create yours with <mark>Flipbook</mark></h3>
            <div class="lead">Save hours on design and development and create faster.</div>
          </div>
          <div class="row justify-content-center text-center mt-md-n4">
            <div class="col-auto">
              <Link to='/upload' href="#" class="btn btn-primary">Upload photos</Link>
            </div>
          </div>
        </Fragment>
        )
}

export default startHeading;
