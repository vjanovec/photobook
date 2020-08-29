import React, { Component, useContext, useParams } from 'react'
import { signUpWithInstagram } from './actions/auth';
import { Redirect, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { FirebaseContext } from "./Firebase";


const Verifyig = ({ match, signUpWithInstagram }) => {

    const fb = useContext(FirebaseContext);
    const location = useLocation();
    const code = (new URLSearchParams(location.search)).get("code")
    console.log(code);
    // const code = 'AQD-zZvR9uW0YrtXkvKK6eqwZIDSFFBFVazzmDr_F-HWkp7HFCviNk1enNzMj_eu6zFHZZf6XckoJlaZZjvzhfW_FnDBAPhfV_IzFlfjpwThpLIxFlrnhyieCJkPUP_5vqK-IM-RtwA6W-ETUDn9kWtUZkvncDwRtIJBkI-wUFPWV_koWnqT8fS7ZQwpaVzmGwY-7ym1b0WNNCq9OfktbXmA6_jAJhgMHSGjahv46qogZw';
    signUpWithInstagram(code, fb)

    return (<Redirect to='/upload/instagram' />)
    
}
const mapStateToProps = (state) => {
    
}

export default connect(mapStateToProps, { signUpWithInstagram })(Verifyig);
