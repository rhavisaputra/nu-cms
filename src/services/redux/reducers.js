import { combineReducers } from 'redux';
import * as widgetResponse from './widget/widgetReducer';
import * as response from './prayingtime/threedayReducer';
import * as quranResponse from './quran/quranReducer';
import * as forum from './forum/forumReducer';

export const rootReducer = combineReducers({
    widgetResponse: widgetResponse.reducer,
    dataResponse: response.reducer,
    quranResponse: quranResponse.reducer,
    dataForum: forum.reducer
})

export default rootReducer;