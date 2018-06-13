

/**
    ACTIONS THAT WILL BE HANDLED BY MORE THAN ONE REDUCER
 */

import {CLEAR_USER_DATA} from "./types";

export const clearUserData = (data) => ({
    type: CLEAR_USER_DATA,
    data
});
