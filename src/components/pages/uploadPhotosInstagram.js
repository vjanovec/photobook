import React, { Component } from 'react';
import UploadPhotosHeading from '../headings/uploadPhotosHeading';
import InstagramSignUp from '../signUpMethods/instagramSignUp';
import Layout from '../layout';


const uploadPhotosInstagram = () => {
    
        return (
            <div>
                <Layout a={<UploadPhotosHeading />} b={<InstagramSignUp />} c={null}/>
            </div>
        )
    
}

export default uploadPhotosInstagram;
