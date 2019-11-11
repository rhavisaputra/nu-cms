import * as types from './actionTypes';

export const initialStateForum = {

}

export const reducer = (state = initialStateForum, action) => {
    switch(action.type){
        case types.FETCH_DISPLAYALL_FORUM_BYUSER:
            return {...state, displayAllForumByUser: action.payload}
        case types.CREATE_FORUM:
            return {...state, createForum: action.payload}
        case types.POST_COMMENT:
            return {...state, postComment: action.payload}
        case types.EDIT_COMMENT:
            return {...state, editComment: action.payload}
        case types.CLOSE_FORUM:
            return {...state, closeForum: action.payload}
        case types.DISPLAY_FORUM_DETAIL:
            return {...state, displayForumDetail: action.payload}
        default:
            return state;
    }
}