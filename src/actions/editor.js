import axios from 'axios';
// import Fb from '../Firebase';
import store from '../store';
import { useContext } from 'react';
import { FirebaseContext } from "../Firebase";

import { SELECT_PAGE_V2, SELECT_GRID_V2, SELECT_PHOTO_V2 } from './types';
import { storage } from 'firebase';

export const selectPage = (pageId) => dispatch => {
   dispatch({
       type: SELECT_PHOTO_V2,
       payload: {
           pageId
       }
   })
}

export const selectGrid = (gridId) => dispatch => {
    var pages = store.getState().pages;
    
    if(pages[selectedPage]) {
        pages[selectedPage].grid = payload.gridId;
    } else {
        pages = {grid: payload.gridId}
    }

        dispatch({
            type: SELECT_PAGE_V2,
            payload: {
                pages
            }
        })

    dispatch({
        type: SELECT_GRID_V2,
        payload: {
            gridId
        }
    })
}

export const selectPhoto = (photoId, gridPosition) => dispatch => {
    dispatch({
        type: SELECT_IMAGE_V2,
        payload: {
            photoId,
            gridPosition,
        }
    })
}