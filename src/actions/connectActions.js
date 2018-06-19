import {SET_CONFIG_DATA_ACTION, CONNECT_TO_ETH_ACTION, DISCONNECT_ACTION, ETH_DISCONNECTED} from "./types";

export const connectToEth = (data) => ({
    type: SET_CONFIG_DATA_ACTION,
    data
});

export const connectedToEth = (data) => ({
    type: CONNECT_TO_ETH_ACTION,
    data
});
        

export const disconnectedFromEth = () => ({
    type: ETH_DISCONNECTED
});

export const disconnectFromEth = () => ({
    type: DISCONNECT_ACTION
});