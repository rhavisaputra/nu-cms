import * as types from './actionTypes';
import { HOST } from '../utils';


export const fetchPrayingTimeThreeDay = (param, dataBody, callback) => ({
    type: types.FETCH_PRAYING_THREEDAY,
    payload: [],
    callback: callback,
    meta: {
        type: 'api',
        url: HOST+'/nu/prayingtimeservice/prayingGetThreeDayPrayingTime',
        method: 'POST',
        headers: {
            'param': param,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataBody)
    }
})

export const fetchTodayPrayTime = (param, dataBody, callback) => ({
    type: types.FETCH_TODAY_PRAYTIME,
    payload: [],
    callback: callback,
    meta: {
        type: 'api',
        url: HOST+'/nu/prayingtimeservice/prayingGetTodayPrayingTime',
        method: 'POST',
        headers: {
            'param': param,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataBody)
    }
})

export const fetchPrayTimeByDate = (param, databody, callback) => ({
    type: types.FETCH_PRAYTIME_BYDATE,
    payload: [],
    callback: callback,
    meta: {
        type: 'api',
        url: HOST+'/nu/prayingtimeservice/prayingGetPrayingTimeByDate',
        method: 'POST',
        headers: {
            'param': param,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(databody)
    }
})

export const fetchCurrentMonthPrayTime = (param, callback) => ({
    type: types.FETCH_CURRENT_MONTHPRAYTIME,
    payload: [],
    callback: callback,
    meta: {
        type: 'api',
        url: HOST+'/nu/prayingtimeservice/prayingGetCurrentMonthPrayingTime',
        method: 'POST',
        headers: {
            'param': param,
        }
    }
})

export const fetchCurrentMonthPrayTimeCity = (param, dataBody, callback) =>({
    type: types.FETCH_CURRENT_MONTHPRAYTIME_CITY,
    payload: [],
    callback: callback,
    meta: {
        type: 'api',
        url: HOST+'/nu/prayingtimeservice/prayingGetCurrentMonthPrayingTimeOfCity',
        method: 'POST',
        headers: {
            'param': param,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataBody)
    }
})

export const fetchPraytimeByYYYYMM = (param, dataBody, callback) => ({
    type: types.FETCH_PRAYTIME_BY_YYYYMM,
    payload: [],
    callback: callback,
    meta: {
        type: 'api',
        url: HOST+'/nu/prayingtimeservice/prayingGetPrayingTimeByYYYYMM',
        method: 'POST',
        headers: {
            'param': param,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataBody)
    }
})