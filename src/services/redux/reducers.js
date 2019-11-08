import { combineReducers } from 'redux';
import * as response from './prayingtime/threedayReducer';

export const rootReducer = combineReducers({
    dataResponse: response.reducer
})

export default rootReducer;