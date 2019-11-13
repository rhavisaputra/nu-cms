import { combineReducers } from 'redux';
import * as widgetResponse from './widget/widgetReducer';
import * as response from './prayingtime/threedayReducer';
import * as quranResponse from './quran/quranReducer';
import * as forum from './forum/forumReducer';
import * as videoCourse from './videocourse/videoCourseReducer';

export const rootReducer = combineReducers({
    widgetResponse: widgetResponse.reducer,
    dataResponse: response.reducer,
    quranResponse: quranResponse.reducer,
    dataForum: forum.reducer,
    dataVideoCourse: videoCourse.reducer
})

export default rootReducer;