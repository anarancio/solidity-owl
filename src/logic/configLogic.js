import { createLogic } from 'redux-logic';
import Web3 from 'web3'

import {SET_CONFIG_DATA_ACTION, DISCONNECT_ACTION} from "../actions/types";
import {connectedToEth, disconnectedFromEth} from "../actions/connectActions"

const disconnectFromEth = createLogic({
    type: DISCONNECT_ACTION,
    process({getState, action}, dispatch, done) {
        console.dir(getState().configReducer.contract.events.Transfer());
        // Check for all subscriptions and cancel them before disconnect
        getState().configReducer.eventList.forEach(event =>{
            if(event.subscription){
                console.log("Unsubscribing from event: "+JSON.stringify(event.name));
                event.subscription.unsubscribe();
            }
        });
        dispatch(disconnectedFromEth());
        done();
    }
});

const createConfigSetup = createLogic({
    type: SET_CONFIG_DATA_ACTION,
    cancelType: DISCONNECT_ACTION,
    process({getState, action}, dispatch, done) {
        const abiJson = JSON.parse(action.data.contractAbi);
        let events = [];
        let web3 = new Web3(new Web3.providers.WebsocketProvider(action.data.ethUrl));
        let contract = new web3.eth.Contract(abiJson, action.data.contractAddr);

        abiJson.forEach(function(element) {
            if(element.type === "event") {
                const event = {
                    index: events.length,
                    name: element.name,
                    subscription: null,
                    listening: false
                }
                events.push(event);
            }
        });
        
        const data = {
            ethUrl: action.data.ethUrl,
            contractAddr: action.data.contractAddr,
            contractAbi: abiJson,
            web3: web3,
            contract: contract,
            events: events,            
        };
        dispatch(connectedToEth(data));
        done();
        /*
        contract.events.allEvents((error, event) => {
            console.log(event);
            console.log(dispatch);
        });
        */
    }
});

export default [
    createConfigSetup,
    disconnectFromEth
];