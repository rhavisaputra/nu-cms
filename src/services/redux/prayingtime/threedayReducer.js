import * as types from './actionTypes';

export const initialStatePrayTime = {
}

export const reducer = (state = initialStatePrayTime, action) => {
    switch(action.type){
        case types.FETCH_PRAYING_THREEDAY:
            return {...state, threeDayPrayTime: action.payload}
        case types.FETCH_TODAY_PRAYTIME:
            return {...state, todayPrayTime: action.payload}
        case types.FETCH_PRAYTIME_BYDATE:
            return {...state, prayTimeByDate: action.payload}
        case types.FETCH_CURRENT_MONTHPRAYTIME:
            return {...state, currentMonthPrayTime: action.payload}
        case types.FETCH_CURRENT_MONTHPRAYTIME_CITY:
            return {...state, currentMonthPrayTimeCity: action.payload}
        case types.FETCH_PRAYTIME_BY_YYYYMM:
            return {...state, prayTimeByYYYYMM: action.payload}
        default:
            return state;
    }
}

export default reducer;