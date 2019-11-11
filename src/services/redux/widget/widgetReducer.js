import * as types from './actionTypes';

export const initialStateWidget = {
}
export const reducer = (state = initialStateWidget, action) => {
  switch(action.type){
    case types.FETCH_TWITTER_FEED:
      return {...state, tweetFeed: action.payload}
    case types.FETCH_YOUTUBE_FEED:
      return {...state, youtubeFeed: action.payload}
    case types.FETCH_TWEET_AND_YOUTUBE_FEED:
      return {...state, twitterAndYoutubeFeed: action.payload}
    default:
      return state;
  }
}

export default reducer;