import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '_reducers';


export const initStore = (initialState = {}) => {
    return createStore(reducer, initialState, applyMiddleware(thunk));
};
