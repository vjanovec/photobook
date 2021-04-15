import React, { Component } from 'react'
import Layout from '../layout';
import UploadPhotosHeading from '../headings/uploadPhotosHeading';
import InstagramSignUp from '../signUpMethods/instagramSignUp';
import StepList from '../stepList';

const uploadImages = () => {
        return (
            <Layout a={<UploadPhotosHeading />} b={<StepList />} c={null}/>
        )
}

export default uploadImages;
