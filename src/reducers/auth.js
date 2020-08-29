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
} from '../actions/types';

const initialState = {
    signInType: null,
    userUid: null,
    error: null,
    statusCode: null,
    token: null,
    isNewUser: null,
    email: null,

}

export default (state = initialState, action) => {
    const { type, payload } = action;


    switch(type) {
        case IG_SIGNUP:
            return {
                ...state,
                token: payload.token,
            }
        case IG_SIGNUP_ERROR: 
            return {
                ...state,
                error: payload.error_message,
                statusCode: payload.status
            }
        case EMAIL_SIGNUP:
            return {
                ...state,
                userUid: payload.user.user.uid,
                signInType: 'email',
                email: payload.email
            }
        case EMAIL_SIGNUP_ERROR:
            return {
                ...state,
                error: payload
            }
        case EMAIL_SIGNIN:
            return {
                ...state,
                userUid: payload.user.user.uid,
                signInType: 'email',
                email: payload.email
            }
        case EMAIL_SIGNIN_ERROR:
            return {
                ...state,
                error: payload
            }
        case FIREBASE_TOKEN_SIGNUP:
            return {
                ...state,
                // userDetails: payload.userDetails,
                userUid: payload.userDetails.user.uid,
                isNewUser: payload.userDetails.additionalUserInfo.isNewUser,
                idToken: payload.idToken,
                signInType: 'instagram'
            }
        case IG_PROFILE:
            return {
                ...state,
                instagramProfile: payload
            }
        case IG_PROFILE_ERROR:
            return {
                ...state,
                error: payload.error_message,
                statusCode: payload.status
            }
        default: return state;
    }
}