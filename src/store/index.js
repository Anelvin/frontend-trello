import { createStore, combineReducers } from 'redux';
import boardReducer from './reducers/boardReducer';
import loadingReducer from './reducers/loadingReducer';
import tokenReducer from './reducers/tokenReducer';

const reducers = combineReducers({
    boardReducer,
    loadingReducer,
    tokenReducer
});

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;