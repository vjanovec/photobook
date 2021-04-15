import React, { Component, useEffect, Fragment } from 'react';
import { Link , useHistory } from 'react-router-dom'
import CreateAccout from '../createAccount';
import Book from "../book";

import SelectImages from '../selectImages';
import InstagramSignUp from '../signUpMethods/instagramSignUp';
import EmailSignUp from '../signUpMethods/emailSignUp';
import StepList from '../stepList';
import SmallBookPreview from '../smallBookPreview';
import UploadPhotosHeading from '../headings/uploadPhotosHeading';
import StartHeading from '../startHeading';
import AccountDetailsForm from '../accountDetailsForm';
import ShippingDetails from '../shippingDetails';
import BookVisualization from '../bookVisualization'

import Layout from '../layout';

const Editor = () => {
  const history = useHistory();

  const saveAndContinue = (e) => {
    e.preventDefault();
    history.push('/account');
  }


    return (
      
        <Layout a={<SelectImages />} b={<Fragment><BookVisualization /><button onClick={e => saveAndContinue(e)}
          class="btn btn-block btn-primary bg-light text-primary w-100"
        >Save and continue</button></Fragment>} c={null}/>
      );
}

export default Editor;
