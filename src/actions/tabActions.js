import {SELECT_TAB} from "./types";


export const setSelectedTabIndex = (index) =>
    (dispatch) =>
        dispatch(setSelectedTab({selectedTabIdx : index}))



const setSelectedTab = (data) => ({
    type: SELECT_TAB,
    data
});
