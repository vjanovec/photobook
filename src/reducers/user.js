import { 
    USER_DETAILS,
    USER_DETAILS_ERROR,
    SHIPPING_DETAILS,
    SHIPPING_DETAILS_ERROR
} from '../actions/types';

const initialState = {
    firstName: null,
    lastName: null,
    email: null,
    address_l1: null,
    address_l2: null,
    city: null,
    country: null,
    zipcode: null,
}

export default (state = initialState, action) => {
    const { type, payload } = action;

    switch(type) {
        case USER_DETAILS: {
            return {
                ...state,
                firstName: payload.firstName,
                lastName: payload.lastName,
                email: payload.email,
            }
        }
        case USER_DETAILS_ERROR: {
            return {
                ...state,
                error: payload,
            }
        }
        case SHIPPING_DETAILS: {
            return {
                ...state,
                address_l1: payload.address_l1,
                address_l2: payload.address_l2,
                city: payload.city,
                country: payload.country,
                zipcode: payload.zipcode,
            }
        }
        case SHIPPING_DETAILS_ERROR: {
            return {
                ...state,
                error: payload
            }
        }
        default: return state;
    }
}