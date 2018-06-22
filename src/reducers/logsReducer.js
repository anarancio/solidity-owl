import update from 'immutability-helper';

import createReducer from './helpers/reducerHelper'
import {NEW_EVENT_ACTION, ETH_DISCONNECTED} from "../actions/types";

const initialState = {
    logs: []
};

const logsReducer = createReducer(initialState,
    {

        [NEW_EVENT_ACTION](state, action) {
            console.log("REDUCER");
            console.log(state);
            const event = action.data.event;
            console.log(event);
            return update(state, {
                logs: {$push: [event]}
            });
        },

        [ETH_DISCONNECTED](state, action) {
            return {
                ...initialState
            };
        }

    });

export default logsReducer;