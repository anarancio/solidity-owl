import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";

import MainContainer from "../containers/MainContainer";
import AuthorizationContainer from "../containers/authorization/AuthorizationContainer";
import UserDashboardContainer from "../containers/userDashboard/UserDashboardContainer";
import AdminDashboardContainer from "../containers/adminDashboard/AdminDashboardContainer";

export default class ApplicationRouter extends Component{

    render = () =>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={MainContainer} />
                <Route path="/login" component={AuthorizationContainer} />
                <Route path="/userDashboard" component={UserDashboardContainer} />
                <Route path="/adminDashboard" component={AdminDashboardContainer}/>
            </Switch>
        </BrowserRouter>

}