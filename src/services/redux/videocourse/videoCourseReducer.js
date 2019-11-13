import * as types from './actionTypes';

export const initialStateVideoCourse = {
}

export const reducer = (state = initialStateVideoCourse, action) => {
  switch(action.type) {
    case types.FETCH_VIDEO_COURSE:
      return {...state, videoCourse: action.payload}
    case types.FETCH_SEARCH_VIDEO_COURSE_BY_TITLE:
      return {...state, searchVideoCourseByTitle: action.payload}
    default:
      return state;
  }
}
export default reducer;