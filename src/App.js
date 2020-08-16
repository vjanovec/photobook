import React, { Fragment, useEffect } from 'react';

import CreateAccout from './components/createAccount';
import Navbar from './components/navbar';
import StepController from './components/stepController';
import Editor from './components/editor';

import "./App.css";
import "./assets/css/custom.css";
import "./assets/css/theme.css";
import "./assets/css/loaders/loader-pulse.css";


import imgIconArrowUp from "./assets/img/icons/interface/icon-arrow-up.svg";


function App() {
  // useEffect(() => {
  //   var pages = document.getElementsByClassName("page");
  //   const book = document.querySelector(".book");

  //   for (var i = 0; i < pages.length; i++) {
  //     var page = pages[i];
  //     if (i % 2 === 0) {
  //       page.style.zIndex = pages.length - i;
  //     }
  //   }
  //     for (var i = 0; i < pages.length; i++) {
  //       //Or var page = pages[i];
  //       pages[i].pageNum = i + 1;
  //       pages[i].onclick = function () {
  //         if (this.pageNum % 2 === 0) {
  //           this.classList.remove("flipped");
  //           this.previousElementSibling.classList.remove("flipped");
  //         } else {
  //           this.classList.add("flipped");
  //           this.nextElementSibling.classList.add("flipped");
  //         }
  //       };
  //       pages[i].style.height = book.clientWidth / 2 + "px";
  //       pages[i].style.width = book.clientWidth / 2 + "px";
  //     }
  //     window.addEventListener("resize", function () {
  //       for (var i = 0; i < pages.length; i++) {
  //         pages[i].style.height = book.clientWidth / 2 + "px";
  //         pages[i].style.width = book.clientWidth / 2 + "px";
  //       }
  //     });
  //   });
    

    

  return (
    <Fragment>
      <Navbar />
      <div
        data-overlay
        class="min-vh-100 bg-light d-flex flex-column justify-content-center o-hidden"
      >
        {/* <StepController /> */}
        {/* <CreateAccout /> */}
        <Editor/>
        
      <div class="position-absolute w-50 h-100 top right">
          <div class="blob bg-primary opacity-20 w-100 h-100 top left"></div>
        </div>
      </div>

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
    </Fragment>
  );
}

export default App;
