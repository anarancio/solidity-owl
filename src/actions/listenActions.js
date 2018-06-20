import {TOGGLE_EVENT, EVENT_LISTENER_STATUS_CHANGED_ACTION, NEW_EVENT_ACTION} from "./types";

export const toggleEvent = (data) => ({
    type: TOGGLE_EVENT,
    data
});

export const eventListenerStatusChanged = (data) => ({
    type: EVENT_LISTENER_STATUS_CHANGED_ACTION,
    data
});

export const newEvent = (data) => ({
    type: NEW_EVENT_ACTION,
    data
});