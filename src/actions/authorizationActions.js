import {AUTHORIZATION} from "./types";
import {clearUserData} from "./genericActions";

export const login = (loginData) =>
    (dispatch, getState, restClient) =>
        new Promise((resolve, reject) =>
            restClient(null)
                .then((client) => {
                   client.apis.user.userLogin({loginData: loginData})
                        .then(response => {
                            return resolve(dispatch(setAuthorizationData({
                                isLoggedIn: true,
                                authorizationData: response.obj.responseContent
                            })));
                        })
                        .catch(error => {
                            // TODO HANDLE THIS
                            alert(JSON.stringify(error));
                        })
                })
                .catch(error => {
                    // TODO HANDLE THIS
                    alert(JSON.stringify(error));
                })
        );

export const logout = () =>
    (dispatch) =>
        dispatch(clearUserData())



const setAuthorizationData = (data) => ({
    type: AUTHORIZATION,
    data
});
