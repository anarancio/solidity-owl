import createReducer from './helpers/reducerHelper'
import {SELECT_TAB} from "../actions/types";

const initialState = {
    selectedTabIdx: 0,
};

const tabReducer = createReducer(initialState,
    {

        [SELECT_TAB](state, action) {
            return {
                ...state,
                selectedTabIdx: action.data.selectedTabIdx,
            };
        }


    });

export default tabReducer;