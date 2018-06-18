import registerServiceWorker from './registerServiceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import getRootReducer from "./reducers/index.js";
import { createLogicMiddleware } from 'redux-logic';

import App from "./components/global/App";
import arrLogic from "./logic/logic";

const logicMiddleware = createLogicMiddleware(arrLogic, {});

const getStore = (initialState)=>{

    const enhancer = compose(
        applyMiddleware(logicMiddleware)
    );

    return createStore(
        getRootReducer,
        initialState,
        enhancer
    );
};


const Store = getStore();


ReactDOM.render(<App store={Store}/>, document.getElementById('root'));


registerServiceWorker();
