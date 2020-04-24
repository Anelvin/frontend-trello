import { createStore, combineReducers } from 'redux';
import boardReducer from './reducers/boardReducer';
import loadingReducer from './reducers/loadingReducer';
import tokenReducer from './reducers/tokenReducer';
import columnsReducer from './reducers/columnsReducer';
import userReducer from './reducers/userReducer';
import taskListReducer from './reducers/taskListReducer';
import boardActiveReducer from './reducers/boardActiveReducer';

const reducers = combineReducers({
    boardReducer,
    loadingReducer,
    tokenReducer,
    columnsReducer,
    userReducer,
    taskListReducer,
    boardActiveReducer
});

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;