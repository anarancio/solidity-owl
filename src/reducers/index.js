import { combineReducers } from 'redux';
import userReducer from "./userReducer.js";
import tabReducer from "./tabReducer.js";

const rootReducer = combineReducers({
    state: (state = {}) => state,
    userReducer: userReducer,
    tabReducer: tabReducer
});

export default rootReducer;
