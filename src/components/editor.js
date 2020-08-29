import React, { Component, useEffect } from 'react';
import CreateAccout from './createAccount';
import Book from "./book";

import SelectImages from './selectImages';
import InstagramSignUp from './signUpMethods/instagramSignUp';
import EmailSignUp from './signUpMethods/emailSignUp';
import StepList from './stepList';
import SmallBookPreview from './smallBookPreview';
import UploadPhotosHeading from './uploadPhotosHeading';
import StartHeading from './startHeading';
import AccountDetailsForm from './accountDetailsForm';
import ShippingDetails from './shippingDetails';

import Layout from './layout';

const Editor = () => {
    return (
      
        <Layout a={<UploadPhotosHeading />} b={<InstagramSignUp/>} c={null}/>
      );
}

export default Editor;
