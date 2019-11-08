import React from 'react';
import { Provider } from 'react-redux';
import App from '../App';
import configStore from '../services/redux/configStore';

const Root = (props) => {
    const store = configStore();
    return(
        <Provider store={store}>
            <App/>
        </Provider>
    )
}

export default Root;