import { combineReducers } from 'redux';
import auth from './auth';
import media from './media';
import user from './user';

    export default combineReducers({
        auth,
        media,
        user
});