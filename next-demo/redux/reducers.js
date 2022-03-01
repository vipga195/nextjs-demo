import commonReducer from "./reducers/index.js";


import { combineReducers } from 'redux';

const allReducers = combineReducers({
    commonReducer
});

export default allReducers;