import store from '../store';


import {
    USER_DETAILS,
    USER_DETAILS_ERROR,
    SHIPPING_DETAILS,
    SHIPPING_DETAILS_ERROR
} from './types';

export const setUserDetails = (details) => dispatch => {
    try {
        if(details) {
            if(details.firstName && details.lastName && details.email) {
                dispatch({
                    type: USER_DETAILS,
                    payload: details
                })
            } 
        }
    } catch(err) {
        console.log(err);
        dispatch({
            type: USER_DETAILS_ERROR,
            payload: err
        })
    }
}
export const setShipping = (shipping) => dispatch => {
    try {
        if(shipping) {
            if(shipping.address_l1  && shipping.city && shipping.country && shipping.zipcode) {
                dispatch({
                    type: SHIPPING_DETAILS,
                    payload: shipping
                })    
            }
        }
    } catch(err) {
        dispatch({
            type: SHIPPING_DETAILS_ERROR,
            payload: err
        })
    }
}