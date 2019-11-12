import { createStore, applyMiddleware } from 'redux';
import apiMiddleware from './apiMiddleware';
import loggingMiddleware from './loggingMiddleware';
import { rootReducer } from './reducers';
import { initialStateWidget } from './widget/widgetReducer';
import { initialStatePrayTime } from './prayingtime/threedayReducer';

export const congfigStore = () => {
    const store = createStore(
        rootReducer,
        initialStatePrayTime,

        applyMiddleware(
            apiMiddleware,
            loggingMiddleware
        )

    )

    return store;
}

export default congfigStore;