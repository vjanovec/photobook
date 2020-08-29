import React, { Component } from 'react'
import StartHeading from '../startHeading';
import Book from '../book';
import Layout from '../layout';

const homepage = () => {
    
        return (
            <div>
                <Layout a={<StartHeading />} b={<Book />} c={null}/>
            </div>
        )
    
}

export default homepage;
