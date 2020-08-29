import React, { Component } from 'react'

const stepList = () => {
        return (
            <div class="card card-body shadow-sm h-100">
            <ol class="list-unstyled p-0">
                <li class="d-flex align-items-start my-4 my-md-5">
                  <div class="rounded-circle p-3 p-sm-4 d-flex align-items-center justify-content-center bg-primary-3">
                    <div class="position-absolute text-white h5 mb-0">1</div>
                  </div>
                  <div class="ml-3 ml-md-4">
                    <h4>Login via Email / Instagram</h4>
                    <p>
                      Oluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.
                    </p>
                    <a href="#">Create one now</a>
                  </div>
                </li>
                <li class="d-flex align-items-start my-4 my-md-5">
                  <div class="rounded-circle p-3 p-sm-4 d-flex align-items-center justify-content-center bg-primary-3">
                    <div class="position-absolute text-white h5 mb-0">2</div>
                  </div>
                  <div class="ml-3 ml-md-4">
                    <h4>Upload images</h4>
                    <p>
                      Error sit voluptatem actium doloremque laudantium, totam rem aperiam, eaque ipsa.
                    </p>
                  </div>
                </li>
                <li class="d-flex align-items-start my-4 my-md-5">
                  <div class="rounded-circle p-3 p-sm-4 d-flex align-items-center justify-content-center bg-primary-3">
                    <div class="position-absolute text-white h5 mb-0">3</div>
                  </div>
                  <div class="ml-3 ml-md-4">
                    <h4>Share and enjoy</h4>
                    <p>
                      Unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.
                    </p>
                  </div>
                </li>
              </ol>
              </div>
        )
}

export default stepList;
