import { combineReducers } from 'redux';
import configReducer from "./configReducer.js";
import logsReducer from "./logsReducer.js";
import tabReducer from "./tabReducer";

const rootReducer = combineReducers({
    state: (state = {}) => state,
    configReducer: configReducer,
    logsReducer: logsReducer,
    tabReducer: tabReducer
});

export default rootReducer;
