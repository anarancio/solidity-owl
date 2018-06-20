import { combineReducers } from 'redux';
import configReducer from "./configReducer.js";
import logsReducer from "./logsReducer.js";

const rootReducer = combineReducers({
    state: (state = {}) => state,
    configReducer: configReducer,
    logsReducer: logsReducer
});

export default rootReducer;
