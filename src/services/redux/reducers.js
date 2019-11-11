import { combineReducers } from 'redux';
import * as response from './prayingtime/threedayReducer';
import * as widgetResponse from './widget/widgetReducer';

export const rootReducer = combineReducers({
    dataResponse: response.reducer,
    widgetResponse: widgetResponse.reducer
})

export default rootReducer;