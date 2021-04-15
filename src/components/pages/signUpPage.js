import React, { Component } from 'react';
import SignUpHeading from '../headings/signUpHeading';
import Layout from '../layout';
import SignUp from '../signUpMethods/SignUp';


const signUpPage = () => {
    
        return (
            <div>
                <Layout a={<SignUpHeading />} b={<SignUp />} c={null}/>
            </div>
        )
    
}

export default signUpPage;
