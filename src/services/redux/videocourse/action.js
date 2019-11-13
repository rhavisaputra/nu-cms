import * as types from './actionTypes';
import { HOST } from '../utils';

export const fetchVideoCourse = (param, callback) => ({
  type: types.FETCH_VIDEO_COURSE,
  payload: [],
  callback: callback,
  meta: {
    type: 'api',
    url: HOST+"/nu/videocourse/videoCourseSepertiUdemy",
    method: 'POST',
    headers: {
      'user_id': param
    }
  }
})

export const fetchSearchVideoCourseByTitle = (param, dataBody, callback) => ({
  type: types.FETCH_SEARCH_VIDEO_COURSE_BY_TITLE,
  payload: [],
  callback: callback,
  meta: {
    type: 'api',
    url: HOST+"/nu/videocourse/searchVideoCourseByTitle",
    method: 'POST',
    headers: {
      'user_id': param,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(dataBody)
  }
})