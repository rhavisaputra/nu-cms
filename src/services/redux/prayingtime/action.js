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