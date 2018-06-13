import createReducer from './helpers/reducerHelper'
import {SET_ETH_URL, SET_CONTRACT_ADDR, SET_CONTRACT_ABI} from "../actions/types";

const initialState = {
    ethUrl: 'ws://localhost:8545',
    contractAddr: '',
    contractAbi: ''
};

const configReducer = createReducer(initialState,
    {

        [SET_ETH_URL](state, action) {
            return {
                ...state,
                ethUrl: action.data.ethUrl,
            };
        },

        [SET_CONTRACT_ADDR](state, action) {
            return {
                ...state,
                contractAddr: action.data.contractAddr,
            };
        },

        [SET_CONTRACT_ABI](state, action) {
            return {
                ...state,
                contractAbi: action.data.contractAbi,
            };
        }


    });

export default configReducer;