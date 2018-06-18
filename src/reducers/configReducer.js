import createReducer from './helpers/reducerHelper'
import {CONNECT_TO_ETH_ACTION, DISCONNECT_ACTION} from "../actions/types";

const initialState = {
    ethUrl: 'ws://localhost:8545',
    contractAddr: '',
    contractAbi: '',
    web3: null,
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
                eventList: action.data.events,
                connected: true
            };
        },

        [DISCONNECT_ACTION](state, action) {
            return {
                ...state,
                ethUrl: '',
                contractAddr: '',
                contractAbi: '',
                web3: null,
                eventList: [],
                connected: false
            };
        }

    });

export default configReducer;