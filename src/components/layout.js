import React, { Component, Fragment } from "react";
import Navbar from './navbar';
import imgIconArrowUp from "../assets/img/icons/interface/icon-arrow-up.svg";

const layout = (props) => {
  return (
    <Fragment>
        {!props.c ? <Fragment>
            <Navbar />
      <div
        data-overlay
        class="min-vh-100 bg-light d-flex flex-column justify-content-center o-hidden"
      >
        <section class="pb-0">
          <div class="container">
            <div class="row align-items-center justify-content-center justify-content-lg-between text-center text-lg-left">
              <div class="col-md-8 col-lg-5 col-xl-5 pl-lg-5 pl-xl-0 order-lg-2 mt-md-5 mt-sm-5">
                {/*PART A*/}
                {props.a}
              </div>
              <div class="col-md-8 col-lg-6 col-xl-6 mt-4 mt-md-5 mt-lg-0 order-lg-1">
                {/*PART B*/}
                {props.b}
              </div>
            </div>
          </div>
        </section>
        <div class="position-absolute w-50 h-100 top right">
          <div class="blob bg-primary opacity-20 w-100 h-100 top left"></div>
        </div>
      </div>
        </Fragment> : <Fragment>
        <Navbar />
        <div
        data-overlay
        class="min-vh-100 bg-light d-flex flex-column justify-content-center o-hidden">
        <section class="pb-0">
        <div class="container">
        <div class="row align-items-center justify-content-center">
          <div class="col-lg-6 col-md-8 col-sm-10">
              
                {/*PART C*/}
                {props.c}
              </div>
              </div>
          </div>
        </section>
        <div class="position-absolute w-50 h-100 top right">
          <div class="blob bg-primary opacity-20 w-100 h-100 top left"></div>
        </div>
        </div>
        </Fragment>}
    </Fragment>
    
  );
};

export default layout;

{/* <a
        href="#top"
        class="btn btn-primary rounded-circle btn-back-to-top"
        // data-smooth-scroll
        // data-aos="fade-up"
        // data-aos-offset="2000"
        // data-aos-mirror="true"
        // data-aos-once="false"
      >
        <img
          src={imgIconArrowUp}
          alt="Icon"
          class="icon"
          // data-inject-svg
        ></img>
      </a> */}