import {SET_CONFIG_DATA_ACTION, CONNECT_TO_ETH_ACTION, DISCONNECT_ACTION} from "./types";

export const connectToEth = (data) => ({
    type: SET_CONFIG_DATA_ACTION,
    data
});

export const connectedToEth = (data) => ({
    type: CONNECT_TO_ETH_ACTION,
    data
});
        

export const disconnectFromEth = () => ({
    type: DISCONNECT_ACTION
});