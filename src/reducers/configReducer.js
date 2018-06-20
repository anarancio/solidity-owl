import update from 'immutability-helper';

import createReducer from './helpers/reducerHelper'
import {CONNECT_TO_ETH_ACTION, ETH_DISCONNECTED, EVENT_LISTENER_STATUS_CHANGED_ACTION} from "../actions/types";

const initialState = {
    ethUrl: 'ws://localhost:9545',
    contractAddr: '0xf25186b5081ff5ce73482ad761db0eb0d25abfbf',
    contractAbi: '[ { "inputs": [], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [ { "indexed": true, "name": "_from", "type": "address" }, { "indexed": true, "name": "_to", "type": "address" }, { "indexed": false, "name": "_value", "type": "uint256" } ], "name": "Transfer", "type": "event" }, { "constant": false, "inputs": [ { "name": "receiver", "type": "address" }, { "name": "amount", "type": "uint256" } ], "name": "sendCoin", "outputs": [ { "name": "sufficient", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [ { "name": "addr", "type": "address" } ], "name": "getBalanceInEth", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "addr", "type": "address" } ], "name": "getBalance", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" } ]',
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
            console.log(state);
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