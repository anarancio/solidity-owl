import createReducer from './helpers/reducerHelper'
import {AUTHORIZATION, CLEAR_USER_DATA} from "../actions/types";

const initialState = {
    selectedUserTransactions: [],
    transactions: [],

};

const transactionReducer = createReducer(initialState,
    {




    });

export default transactionReducer;