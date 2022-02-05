import React from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import App from './App';

import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './store/reducers/index';

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

const Root = () => (
    <Provider store={store}>
        <App />
    </Provider>
)

AppRegistry.registerComponent(appName, () => Root);
