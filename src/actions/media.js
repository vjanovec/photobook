import axios from 'axios';
// import Fb from '../Firebase';
import store from '../store';
import { useContext } from 'react';
import { FirebaseContext } from "../Firebase";
import { v4 as uuidv4 } from 'uuid';

import { 
    IG_USER_MEDIA,
    IG_USER_MEDIA_ERROR
} from './types';

export const getIgUserMedia = (idToken) => async dispatch => {
    try {
        const res = await axios({
            method: 'POST',
            url: 'https://us-central1-photobook-b74d7.cloudfunctions.net/getUserMedia',
            data: {
                token: idToken
            },
            headers: { contentType: 'application/json' },
        })
        dispatch({
            type: IG_USER_MEDIA,
            payload: { userMedia: res.data}
        })
    } catch (err) {
        console.log(err);
        dispatch({
            type: IG_USER_MEDIA_ERROR,
            payload: err
        })
    }
}

export const galleryUploadImage = (images, fb) => async dispatch => {
        try {
            const userUid = store.getState().auth.userUid;
            const storageRef = fb.getStorageRef();
            console.log(storageRef);
            const imagePath = `images/${userUid}_${uuidv4()}`;
            console.log(imagePath);
            const uploadTask = storageRef.child(imagePath).put(images);
            uploadTask.on("state_changed", snapshot => {
                console.log('snapshot')
            }, error => {
                console.log(error)
            }, () => {
                storageRef.child(imagePath).getDownloadUrl()
                .then(url => {
                    console.log(url)
                    // dispatch({})
                }) 
                
            });
            
        } catch (err) {
            console.log(err)
            // dispatch({})
        }
}