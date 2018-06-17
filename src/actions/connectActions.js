import {SET_CONFIG_DATA_ACTION, DISCONNECT_ACTION} from "./types";

export const connectToEth = (data) => ({
    type: SET_CONFIG_DATA_ACTION,
    data
});

export const disconnectFromEth = () => ({
    type: DISCONNECT_ACTION
});