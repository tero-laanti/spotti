import {createStore, compose, applyMiddleware} from 'redux';
import rootReducer from './rootReducer';
import thunk from 'redux-thunk';

const composedEnhancer = compose(applyMiddleware(thunk));

//Commented so the empty reducer list doesn't give errors
// const initStore = () =>{return createStore(rootReducer, composedEnhancer)};

const initStore = () =>{return createStore(composedEnhancer)};

export default initStore;