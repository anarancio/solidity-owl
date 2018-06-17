import {SET_CONFIG_DATA_ACTION, DISCONNECT_ACTION} from "./types";
import Web3 from 'web3'

export const connectToEth = (data) => ({
    type: SET_CONFIG_DATA_ACTION,
    web3: new Web3(data.ethUrl),
    data
});

export const disconnectFromEth = () => ({
    type: DISCONNECT_ACTION
});