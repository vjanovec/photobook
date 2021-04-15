import { SELECT_PAGE_V2, SELECT_GRID_V2, SELECT_PHOTO_V2 } from '../actions/types';

const initialState = {
    selectedPage = null,
    pages = [],
}

export default (state = initialState, action) => {
    const { type, payload } = action;

    switch(type) {
        case SELECT_PAGE_V2: {
            return {
                ...state,
                selectedPage: payload.selectedPage,
            }
        }
    
        case SELECT_GRID_V2: {
            return {
                ...state,
                pages: payload.pages,
            }
        }

        case SELECT_PHOTO_V2: {

            return {
                ...state,
                pages: payload.pages
            }
        }
        
        
        default: return state;
    }
}