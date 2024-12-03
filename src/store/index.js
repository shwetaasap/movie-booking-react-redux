import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise';
import reducer from '../reducer';

// Combine middleware and Redux DevTools extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    latency: 0
}) || compose;

let store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(promiseMiddleware))
);

export default store;