import * as types from './actionTypes';
import { HOST } from '../utils';

export const fetchTwitterFeed = (param, callback) => ({
  type: types.FETCH_TWITTER_FEED,
  payload: [],
  callback: callback,
  meta: {
    type: 'api',
    url: HOST+"/nu/widgetservice/getUserTimeline",
    method: 'GET',
    headers: {
      'param': param
    }
  }
})
export const fetchYoutubeFeed = (param, callback) => ({
  type: types.FETCH_YOUTUBE_FEED,
  payload: [],
  callback: callback,
  meta: {
    type: 'api',
    url: HOST+"/nu/widgetservice/getVideoListUrl",
    method: 'GET',
    headers: {
      'param': param
    }
  }
})
export const fetchTweetAndYoutubeFeed = (param, callback) => ({
  type: types.FETCH_TWEET_AND_YOUTUBE_FEED,
  payload: [],
  callback: callback,
  meta: {
    type: 'api',
    url: HOST+"/nu/widgetservice/getTweetAndYoutubeFeed",
    method: 'GET',
    headers: {
      'param': param
    }
  }
})