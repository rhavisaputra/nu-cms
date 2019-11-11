import { combineReducers } from 'redux';
import * as response from './prayingtime/threedayReducer';
import * as forum from './forum/forumReducer';

export const rootReducer = combineReducers({
    dataResponse: response.reducer,
    dataForum : forum.reducer
})

export default rootReducer;