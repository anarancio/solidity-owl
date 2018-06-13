import registerServiceWorker from './registerServiceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import getRootReducer from "./reducers/index.js";




import App from "./components/global/App";

const getStore = (initialState)=>{

    return createStore(
        getRootReducer,
        initialState
    );
};


const Store = getStore();


ReactDOM.render(<App store={Store}/>, document.getElementById('root'));


registerServiceWorker();
