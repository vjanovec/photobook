import React, { Component, Fragment } from "react";
import Navbar from './navbar';
import imgIconArrowUp from "../assets/img/icons/interface/icon-arrow-up.svg";

const editorLayout = (props) => {
  return (
    <Fragment>
        <Navbar />
        <div
        data-overlay
        class="min-vh-100 bg-light d-flex flex-column justify-content-center o-hidden">
        <section class="pb-0">
        <div class="container">
        <div class="row align-items-center justify-content-center">
          <div class="col-lg-10 col-md-10 col-sm-10">
              
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
    </Fragment>
    
  );
};

export default editorLayout;

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