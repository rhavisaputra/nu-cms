import * as types from './actionTypes';
import { HOST } from '../utils';

export const fetchQuranGetBookmark = (param, callback) => ({
  type: types.FETCH_QURAN_GET_BOOKMARK,
  payload: [],
  callback: callback,
  meta: {
    type: 'api',
    url: HOST+"/nu/servicequran/quranGetBookmark",
    method: 'POST',
    headers: {
      'param': param,
    }
  }
})
export const fetchQuranSetBookmark = (param, dataBody, callback) => ({
  type: types.FETCH_QURAN_SET_BOOKMARK,
  payload: [],
  callback: callback,
  meta: {
    type: 'api',
    url: HOST+"/nu/servicequran/quranSetBookmark",
    method: 'POST',
    headers: {
      'param': param,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(dataBody)
  }
})
export const fetchListSurah = (param, callback) => ({
  type: types.FETCH_LIST_SURAH,
  payload: [],
  callback: callback,
  meta: {
    type: 'api',
    url: HOST+"/nu/servicequran/listSurah",
    method: 'POST',
    headers: {
      'param': param,
    }
  }
})
export const fetchQuranSearchSurahByName = (param, dataBody, callback) => ({
  type: types.FETCH_QURAN_SEARCH_SURAH_BY_NAME,
  payload: [],
  callback: callback,
  meta: {
    type: 'api',
    url: HOST+"/nu/servicequran/quranSearchSurahByName",
    method: 'POST',
    headers: {
      'param': param,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(dataBody)
  }
})
export const fetchQuranViewSurahAll = (param, dataBody, callback) => ({
  type: types.FETCH_QURAN_VIEW_SURAH_ALL,
  payload: [],
  callback: callback,
  meta: {
    type: 'api',
    url: HOST+"/nu/servicequran/quranViewSurahAll",
    method: 'POST',
    headers: {
      'param': param,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(dataBody)
  }
})
export const fetchQuranViewSurahByName = (param, dataBody, callback) => ({
  type: types.FETCH_QURAN_VIEW_SURAH_BY_NAME,
  payload: [],
  callback: callback,
  meta: {
    type: 'api',
    url: HOST+"/nu/servicequran/quranViewSurahByName",
    method: 'POST',
    headers: {
      'param': param,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(dataBody)
  }
})
export const fetchQuranViewSurahByNumber = (param, dataBody, callback) => ({
  type: types.FETCH_QURAN_VIEW_SURAH_BY_NUMBER,
  payload: [],
  callback: callback,
  meta: {
    type: 'api',
    url: HOST+"/nu/servicequran/quranViewSurahByNumber",
    method: 'POST',
    headers: {
      'param': param,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(dataBody)
  }
})
export const fetchSurahListByJuzAll	 = (param, callback) => ({
  type: types.FETCH_SURAH_LIST_BY_JUZ_ALL,
  payload: [],
  callback: callback,
  meta: {
    type: 'api',
    url: HOST+"/nu/servicequran/surahListByJuzAll",
    method: 'POST',
    headers: {
      'param': param,
    }
  }
})
export const fetchSurahListByJuzNumber = (param, dataBody, callback) => ({
  type: types.FETCH_SURAH_LIST_BY_JUZ_NUMBER,
  payload: [],
  callback: callback,
  meta: {
    type: 'api',
    url: HOST+"/nu/servicequran/surahListByJuzNumber",
    method: 'POST',
    headers: {
      'param': param,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(dataBody)
  }
})