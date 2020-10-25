import { 
    IG_USER_MEDIA,
    IG_USER_MEDIA_ERROR,
    GALLERY_MEDIA,
    GALLERY_MEDIA_ERROR,
    SELECT_PHOTO
} from '../actions/types';

const initialState = {
    media: []
}

export default (state = initialState, action) => {
    const { type, payload } = action;


    switch(type) {
        case IG_USER_MEDIA:
            return {
                ...state,
                media: state.media.concat(payload.userMedia.data),
                paging: payload.userMedia.paging
            }
        case IG_USER_MEDIA_ERROR:
            return {
                ...state,
                error: payload
            }
        case GALLERY_MEDIA:
            return {
                ...state,
                media: state.media.concat(payload)
            }
        case GALLERY_MEDIA_ERROR:
            return {
                ...state,
                error: payload
            }
        case SELECT_PHOTO:
            const media = state.media;
            media[payload.index] = payload.element
            return {
                ...state,
                media: media
            }
        default: return state;
    }
}