/**
 * Functions that redirect to login page if user isnt logged in or doesnt have permissions to acces to some page.
 * This functions only apply when accesing via url when using react-router.
 */

import {ADMIN_ROLE} from "../config/applicationConstants";

export const requireAuth = (nextState, replace, authorizationData) => {
    if(authorizationData === undefined){
          replace("/");
     }

}

export const requireAdminAuth= (nextState, replace, authorizationData) => {
    if(authorizationData === undefined ||  authorizationData.role !== ADMIN_ROLE) {
        replace("/")
    }
}