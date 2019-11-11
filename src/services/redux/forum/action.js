import * as types from './actionTypes';
import { HOST } from '../utils';

export const fetchDisplayAllForumByUser = (param,dataBody,callback) => ({
    type: types.FETCH_DISPLAYALL_FORUM_BYUSER,
    payload: [],
    callback: callback,
    meta: {
        type:'api',
        url: HOST+'/nu/forum/displayAllForumByUser',
        method: 'POST',
        headers: {
            'param': param,
            'Content-Type':'application/json'
        },
        body:JSON.stringify(dataBody)
    }
})

export const fetchCreateForum = (param, dataBody, callback) => ({
    type: types.CREATE_FORUM,
    payload: [],
    callback: callback,
    meta: {
        type: 'api',
        url: HOST+'/nu/forum/createForum',
        method: 'POST',
        headers: {
            'param': param,
            'Content-Type':'application/json'
        },
        body: JSON.stringify(dataBody)
    }
})

export const fetchPostComment = (param, dataBody, callback) => ({
    type: types.POST_COMMENT,
    payload: [],
    callback: callback,
    meta: {
        type: 'api',
        url: HOST+'/nu/forum/postComment',
        method: 'POST',
        headers: {
            'param': param,
            'Content-Type':'application/json'
        },
        body: JSON.stringify(dataBody)
    }
})

export const fetchEditComment = (param, dataBody, callback) => ({
    type: types.EDIT_COMMENT,
    payload: [],
    callback: callback,
    meta: {
        type: 'api',
        url: HOST+'/nu/forum/editComment',
        method: 'POST',
        headers: {
            'param': param,
            'Content-Type':'application/json'
        },
        body: JSON.stringify(dataBody)
    }
})

export const fetchCloseForum = (param, dataBody, callback) => ({
    type: types.CLOSE_FORUM,
    payload: [],
    callback: callback,
    meta: {
        type: 'api',
        url: HOST+'/nu/forum/closeForum',
        method: 'POST',
        headers: {
            'param': param,
            'Content-Type':'application/json'
        },
        body: JSON.stringify(dataBody)
    }
})

export const fetchDisplayForumDetail = (param, dataBody, callback) => ({
    type: types.DISPLAY_FORUM_DETAIL,
    payload: [],
    callback: callback,
    meta: {
        type: 'api',
        url: HOST+'/nu/forum/displayForumDetail',
        method: 'POST',
        headers: {
            'param': param,
            'Content-Type':'application/json'
        },
        body: JSON.stringify(dataBody)
    }
})