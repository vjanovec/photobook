import React, { Component } from 'react';
import UploadPhotosHeading from '../uploadPhotosHeading';
import EmailSignUp from '../signUpMethods/emailSignUp';
import Layout from '../layout';

const uploadPhotosGallery = () => {
    
        return (
            <div>
                <Layout a={<UploadPhotosHeading />} b={<EmailSignUp/>} c={null}/>
            </div>
        )
    
}

export default uploadPhotosGallery;
