import React, { Component } from 'react'
import imgIconArrowLeft from "../assets/img/icons/interface/icon-arrow-left.svg";
import imgIconArrowRight from "../assets/img/icons/interface/icon-arrow-right.svg";

const selectImages = () => {
        return (
            <div class="card card-body shadow-sm h-100">
              {/* <div class="display-4 text-primary mb-3" data-countup="" data-start="20" data-end="24" data-duration="1" data-decimal-places="" data-prefix="" data-separator="" data-grouping="" data-suffix="/7" data-easing="false">24/7</div>
                    <div>Our support experts are ready to assist anytime</div> */}
              <div className="container-fluid">
                <div className="row">
                  <div className="col-6">
                    <img
                      src="https://picsum.photos/800/800"
                      className="img-fluid"
                    ></img>
                  </div>
                  <div className="col-6">
                    <img
                      src="https://picsum.photos/800/800"
                      className="img-fluid"
                    ></img>
                  </div>
                </div>
                <div className="row pt-4">
                  <div className="col-6">
                    <img
                      src="https://picsum.photos/800/800"
                      className="img-fluid"
                    ></img>
                  </div>
                  <div className="col-6">
                    <img
                      src="https://picsum.photos/800/800"
                      className="img-fluid"
                    ></img>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center mt-5">
              <div class="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-6 pl-2 pr-2 pt-2">
                <nav>
                  <ul class="pagination justify-content-center">
                    <li class="page-item">
                      <a
                        class="page-link rounded"
                        href="#"
                        aria-label="Previous"
                      >
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          class="injected-svg icon icon-xs bg-primary"
                          data-src={imgIconArrowLeft}
                        >
                          <path
                            d="M12 5L5 12L12 19M19 12H6H19Z"
                            stroke="#2C3038"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </a>
                    </li>
                    <li class="page-item active">
                      <a class="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link rounded" href="#" aria-label="Next">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          class="injected-svg icon icon-xs bg-primary"
                          data-src={imgIconArrowRight}
                        >
                          <path
                            d="M12 5L19 12L12 19M5 12H18H5Z"
                            stroke="#2C3038"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </a>
                    </li>
                  </ul>
                </nav>
                </div>
                <div class="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-6 pl-2 pr-2 pt-2">
                <a href="#" class="btn btn-primary w-100">
                  Upload
                </a>
              </div>
              </div>
            </div>
        )
}

export default selectImages
