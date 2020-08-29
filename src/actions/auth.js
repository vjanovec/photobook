import axios from 'axios';
// import Fb from '../Firebase';
import store from '../store';

import { 
    IG_SIGNUP,
    IG_SIGNUP_ERROR,
    EMAIL_SIGNUP,
    EMAIL_SIGNUP_ERROR,
    EMAIL_SIGNIN,
    EMAIL_SIGNIN_ERROR,
    IG_PROFILE,
    IG_PROFILE_ERROR,
    FIREBASE_TOKEN_SIGNUP,
    FIREBASE_TOKEN_SIGNUP_ERROR,
    IG_USER_MEDIA,
    IG_USER_MEDIA_ERROR
} from './types';


export const loginWithCustomToken = (token, fb) => async dispatch => {
    try {
        const res = await fb.signInWithCustomToken(token)
        console.log(res);
        dispatch( {
            type: FIREBASE_TOKEN_SIGNUP,
            payload: res
        })
    } catch(err) {
        console.log(err)
        dispatch( {
             type: FIREBASE_TOKEN_SIGNUP_ERROR,
             payload: err
        })
       
    }
}
export const signUpWithInstagram = (code, fb) => async dispatch => {
    try {
        const res = await axios({
            url: 'https://us-central1-photobook-b74d7.cloudfunctions.net/getAccessToken',
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            data: {
                code,
                username: "vojtech.janovec"
            }
        });
        // dispatch({
        //     type: IG_SIGNUP,
        //     payload: { token: res.data.token }
        // })

        const loginRes = await fb.signInWithCustomToken(res.data.token);
        const idToken = await fb.getIdToken(true);
        dispatch({
            type: FIREBASE_TOKEN_SIGNUP,
            payload: { userDetails: loginRes, idToken: idToken }
        });
        const profileRes = await axios({
            url: 'https://us-central1-photobook-b74d7.cloudfunctions.net/getUserProfile',
            headers: { 'content-type': 'application/json' },
            method: 'POST',
            data: {
                token: idToken
            }
        })
        dispatch({
            type: IG_PROFILE,
            payload: profileRes.data
        })
        
    }
    catch(err) {
        console.log(err);
        dispatch({
            type: IG_SIGNUP_ERROR,
            payload: { error_message: err.data, status: err.status}
        })
    }       
}

export const signUpWithEmail = (email, password, terms, fb) => async dispatch => {
    try {
        const userRes = await fb.signUpWithEmailAndPassword(email, password);
        console.log(userRes);
    
            dispatch({
                type: EMAIL_SIGNUP,
                payload: { user: userRes, email: email }
            })        
    } catch(err) {
        console.log("error");
        console.log(err);
        dispatch({
            type: EMAIL_SIGNUP_ERROR,
            payload: err
        })
    }
}
export const signInWithEmail = (email, password, fb) => async dispatch => {
    try {
        const userRes = await fb.signInWithEmailAndPassword(email, password);
        console.log(userRes);
        if(!userRes.user) {
            return dispatch({
                type: EMAIL_SIGNIN_ERROR,
                payload: userRes.error
            })
        } else {
            dispatch({
                type: EMAIL_SIGNIN,
                payload: { user: userRes, email: email}
            })
        } 
    } catch (err) {
        console.log(err);
        dispatch({
            type: EMAIL_SIGNIN_ERROR,
            payload: err
        })
    }
}


export const getUserInstagramProfile = (firebaseToken) => async dispatch => {
    try {
        const res = await axios({
            url: 'https://us-central1-photobook-b74d7.cloudfunctions.net/getUserProfile',
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            data: { 
                token: firebaseToken
            }
        })
        dispatch({
            type: 'IG_PROFILE',
            payload: res.data
        })
    } catch (err) {
        console.log(err);
        dispatch({
            type: IG_PROFILE_ERROR,
            payload: { error_message: err.response.data, status: err.response.status}
        })
    }
}