import * as types from './actionTypes';

export const initialStateQuran = {
}

export const reducer = (state = initialStateQuran, action) => {
    switch(action.type){
        case types.FETCH_QURAN_GET_BOOKMARK:
            return {...state, quranGetBookmark: action.payload}
        case types.FETCH_QURAN_SET_BOOKMARK:
            return {...state, quranSetBookmark: action.payload}
        case types.FETCH_LIST_SURAH:
            return {...state, listSurah: action.payload}
        case types.FETCH_QURAN_SEARCH_SURAH_BY_NAME:
            return {...state, quranSearchSurahByName: action.payload}
        case types.FETCH_QURAN_VIEW_SURAH_ALL:
            return {...state, quranViewSurahAll: action.payload}
        case types.FETCH_QURAN_VIEW_SURAH_BY_NAME:
            return {...state, quranViewSurahByName: action.payload}
        case types.FETCH_QURAN_VIEW_SURAH_BY_NUMBER:
            return {...state, quranViewSurahByNumber: action.payload}
        case types.FETCH_SURAH_LIST_BY_JUZ_ALL:
            return {...state, surahListByJuzAll: action.payload}
        case types.FETCH_SURAH_LIST_BY_JUZ_NUMBER:
            return {...state, surahListByJuzNumber: action.payload}
        default:
            return state;
    }
}

export default reducer;