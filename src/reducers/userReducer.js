import createReducer from './helpers/reducerHelper'
import {AUTHORIZATION, CLEAR_USER_DATA} from "../actions/types";

const initialState = {
    isLoggedIn: false,
    authorizationData: undefined,
    userBalance: 0,
    usersList: [],
    selectedUser: undefined
};

const userReducer = createReducer(initialState,
    {

        [AUTHORIZATION](state, action) {
            return {
                ...state,
                isLoggedIn: action.data.isLoggedIn,
                authorizationData: action.data.authorizationData
            };
        },

        [CLEAR_USER_DATA](){
            return{
                ...initialState
            }
        }


    });

export default userReducer;