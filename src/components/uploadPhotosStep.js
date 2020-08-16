import React, { Component } from "react";
import Book from "./book";

import SelectImages from './selectImages';
import InstagramSignUp from './signUpMethods/instagramSignUp';
import EmailSignUp from './signUpMethods/emailSignUp';
import StepList from './stepList';
import SmallBookPreview from './smallBookPreview';

const uploadPhotosStep = () => {
  return (
    <section class="pb-0">
      <div class="container">
        <div class="row align-items-center justify-content-center justify-content-lg-between text-center text-lg-left">
         {/* <div class="col-md-9 col-lg-6 col-xl-5 pl-lg-5 pl-xl-0 order-lg-2"> */}
                       
            <SmallBookPreview />
             {/* <h1 class="display-3">
              Upload your <mark>photos</mark>
            </h1> */}
            {/* <!-- <p class="lead">
                Make Your Own Photo Book On Your Phone Online. No App Download Required. Get Your Free Copy
              </p> --> */}
            {/* <a href="#" class="lead ml-lg-4">
              Upload source
            </a>
            <div class="row justify-content-center col-sm-12 col-xs-12 col-md-12 ml-auto mr-auto">
              <div class="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-6 pl-2 pr-2 pt-2">
                <a href="#" class="btn btn-primary bg-light text-primary w-100">
                  Gallery
                </a>
              </div>
              <div class="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-6 pl-2 pr-2 pt-2">
                <a href="#" class="btn btn-primary w-100">
                  Instagram
                </a>
              </div>
            </div>
          </div>   */}
          {/* </div> */}
          {/* <div class="row section-title justify-content-center text-center"> */}
             {/* <div class="col-md-9 col-lg-8 col-xl-7">  */}
              {/* <h3 class="display-3">Create yours with <mark>Flipbook</mark></h3>
              <div class="lead">Save hours on design and development and create faster.</div>
            </div>
          </div>
          <div class="row justify-content-center text-center mt-md-n4">
            <div class="col-auto">
              <a href="#" class="btn btn-primary btn-lg">Start creating</a>
            </div>
          </div>
          </div> */}
            
            {/* </div> */}
          {/* <div class="col-md-8 col-lg-6 mt-4 mt-md-5 mt-lg-0 order-lg-1"> */}
            {/* <Book /> */}
            {/* <SelectImages /> */}
            {/* <InstagramSignUp /> */}
              {/* <EmailSignUp /> */}
              {/* <div class="card card-body shadow-sm h-100">
                <StepList />
              </div> */}
             
            {/* </div> */}
          </div>
        </div>
      {/* </div> */}
    </section>
  );
};

export default uploadPhotosStep;
