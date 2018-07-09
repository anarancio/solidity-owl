import update from 'immutability-helper';

import createReducer from './helpers/reducerHelper'
import {CONNECT_TO_ETH_ACTION, ETH_DISCONNECTED, EVENT_LISTENER_STATUS_CHANGED_ACTION} from "../actions/types";

const initialState = {
    ethUrl: '',
    contractAddr: '',
    contractAbi: '',
    web3: null,
    contract: null,
    eventList: [],
    connected: false
};

const configReducer = createReducer(initialState,
    {

        [CONNECT_TO_ETH_ACTION](state, action) {
            return {
                ...state,
                ethUrl: action.data.ethUrl,
                contractAddr: action.data.contractAddr,
                contractAbi: action.data.contractAbi,
                web3: action.data.web3,
                contract: action.data.contract,
                eventList: action.data.events,                
                connected: true
            };
        },

        [ETH_DISCONNECTED](state, action) {
            return {
                ...initialState
            };
        },

        [EVENT_LISTENER_STATUS_CHANGED_ACTION](state, action) {
            const event = state.eventList[action.data.idx];
            const newEvent = update(event, {
                listening: {$set: action.data.listening},
                subscription: {$set: action.data.subscription}
            });
            
            return update(state, {
                eventList: {$splice: [[action.data.idx, 1, newEvent]]}
            })
        }

    });

export default configReducer;