import * as types from './actionTypes';

export const initialStatePrayTime = {
    response: []
}

export const reducer = (state = initialStatePrayTime, action) => {
    switch(action.type){
        case types.FETCH_PRAYING_THREEDAY:
            return {...state, threeDayPrayTime: action.payload}
        case types.FETCH_TODAY_PRAYTIME:
            return {...state, todayPrayTime: action.payload}
        default:
            return state;
    }
}

export default reducer;