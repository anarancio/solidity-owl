import { createLogic } from 'redux-logic';
import Web3 from 'web3'

import {SET_CONFIG_DATA_ACTION} from "../actions/types";
import {connectedToEth} from "../actions/connectActions"

const createConfigSetup = createLogic({
    type: SET_CONFIG_DATA_ACTION,
    process({getState, action}, dispatch, done) {
        const abiJson = JSON.parse(action.data.contractAbi);
        let events = [];
        abiJson.forEach(function(element) {
            if(element.type == "event") {
                events.push(element.name);
            }
        });
        console.log(events);
        const data = {
            ethUrl: action.data.ethUrl,
            contractAddr: action.data.contractAddr,
            contractAbi: abiJson,
            web3: new Web3(action.data.ethUrl),
            events: events,
        };
        console.log(data);
        dispatch(connectedToEth(data));
        done();
    }
});

export default [
    createConfigSetup
];