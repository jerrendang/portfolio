import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import {scrollReducer} from './pageScroll';
import {elementOnScreenReducer} from './elementOnScreen';

const rootReducer = combineReducers({
    scrollTracker: scrollReducer,
    elementOnScreen: elementOnScreenReducer
})

let enhancer;

if (process.env.NODE_ENV !== 'production'){
    const logger = require('redux-logger').default;
    const composeEnhancers =
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    enhancer = composeEnhancers(applyMiddleware(logger));
}

const configureStore = (preloadedState) => {
    return createStore(rootReducer, preloadedState, enhancer);
}

export default configureStore;