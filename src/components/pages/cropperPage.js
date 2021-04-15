import React, { Component, Fragment, useState } from 'react'
import Layout from '../layout';
import MyCropper from '../myCropper';
import Navbar from '../navbar';
import imgIconArrow from "../../assets/img/icons/interface/icon-arrow-right.svg";
import imgIconCheck from "../../assets/img/icons/interface/icon-check.svg";
import imgIconReload from "../../assets/img/icons/interface/iconmonstr-refresh-3.svg";


const CropperPage = () => {

    const [img, setImage] = useState('https://img.huffingtonpost.com/asset/5ab4d4ac2000007d06eb2c56.jpeg?cache=sih0jwle4e&ops=1910_1000')

        return (
            <Fragment>
        <div
        data-overlay
        class="min-vh-100 bg-light d-flex flex-column justify-content-center o-hidden">
        <div class="container">
        <div class="row align-items-center justify-content-center">
          <div class="col-lg-8 col-md-8 col-sm-10 p-0" id='cropper-size'>
              
                <MyCropper img={img}/>
              </div>
              </div>
          </div>
        <div class="position-absolute w-50 h-100 top right">
          <div class="blob bg-primary opacity-20 w-100 h-100 top left"></div>
        </div>
        </div>
        </Fragment>
        )
    /* ONCE IMAGE URL IS PASSED THROUGH THIS ELEMENT CHANGE MIN WIDTH TO BE SAME AS WIDTH OF THE IMAGE */
}

export default CropperPage;
