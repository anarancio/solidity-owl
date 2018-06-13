import { combineReducers } from 'redux';
import configReducer from "./configReducer.js";

const rootReducer = combineReducers({
    state: (state = {}) => state,
    configReducer: configReducer
});

export default rootReducer;
