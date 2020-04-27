import { createStore, combineReducers, applyMiddleware } from 'redux';
import boardReducer from './reducers/boardReducer';
import loadingReducer from './reducers/loadingReducer';
import tokenReducer from './reducers/tokenReducer';
import columnsReducer from './reducers/columnsReducer';
import userReducer from './reducers/userReducer';
import taskListReducer from './reducers/taskListReducer';
import boardActiveReducer from './reducers/boardActiveReducer';

function saveToLocalStorage(state) {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch (error) {
        console.log(error);
    }
}

function loadFromLocalStorage() {
    try {
        const serializedState = localStorage.getItem('state');
        if(serializedState === null) return undefined
        return JSON.parse(serializedState);
    } catch (error) {
        console.log(error);
        return undefined;
    }
}

const reducers = combineReducers({
    boardReducer,
    loadingReducer,
    tokenReducer,
    columnsReducer,
    userReducer,
    taskListReducer,
    boardActiveReducer
});

const persistedState = loadFromLocalStorage();

const store = createStore(reducers, persistedState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;