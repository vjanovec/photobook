import { 
    IG_USER_MEDIA,
    IG_USER_MEDIA_ERROR
} from '../actions/types';

const initialState = {
    instagramUserMedia: null
}

export default (state = initialState, action) => {
    const { type, payload } = action;


    switch(type) {
        case IG_USER_MEDIA:
            return {
                ...state,
                instagramUserMedia: payload.userMedia
            }
        case IG_USER_MEDIA_ERROR:
            return {
                ...state,
                error: payload
            }
        default: return state;
    }
}