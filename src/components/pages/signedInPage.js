import React, { Component } from 'react';
import SignedInHeading from '../headings/signedInHeading';
import Layout from '../layout';
import SignedIn from '../SignedIn';


const signedInPage = () => {
    
        return (
            <div>
                <Layout a={<SignedInHeading />} b={<SignedIn />} c={null}/>
            </div>
        )
    
}

export default signedInPage;
