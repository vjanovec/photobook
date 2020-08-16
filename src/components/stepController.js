import React, { Component } from "react";
import imgIconArrowLeft from "../assets/img/icons/interface/icon-arrow-left.svg";
import imgIconArrowRight from "../assets/img/icons/interface/icon-arrow-right.svg";

const stepsController = () => {
  return (
    <div className="container-fluid d-flex justify-content-center">
      <a href="#" class="btn btn-primary rounded-circle ml-5 mr-5">
        <img src={imgIconArrowLeft} alt="Icon" class="icon"></img>
      </a>
      <a href="#" class="btn btn-primary rounded-circle ml-5 mr-5">
        <img src={imgIconArrowRight} alt="Icon" class="icon"></img>
      </a>
    </div>
  );
};

export default stepsController;
