import { createLogic } from 'redux-logic';
import Web3 from 'web3'

import {TOGGLE_EVENT} from "../actions/types";
import {eventListenerStatusChanged} from "../actions/listenActions"

const toggleEvent = createLogic({
    type: TOGGLE_EVENT,
    process({getState, action}, dispatch, done) {
        let subscription = null;
        if(!action.data.listening) {
            // we have to listen for the event            
           subscription = getState().configReducer.contract.events[action.data.name]({}, function(error, event) {
                console.log("evento1:");
                console.log(event);
                console.log(dispatch);
            });
        } else {
            getState().configReducer.eventList[action.data.idx].subscription.unsubscribe();
            subscription = null;
        }

        const data = {
            idx: action.data.idx,
            listening: !action.data.listening,
            subscription: subscription
        }
        dispatch(eventListenerStatusChanged(data));
        done();
    }
});

export default [
    toggleEvent
];