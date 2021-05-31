import { combineReducers, createStore } from 'redux';
import BTGameOanTuXiReducer from './BTGameOanTuXiReducer'

const rootReducer = combineReducers({
    BTGameOanTuXiReducer
});

export const store = createStore(rootReducer);