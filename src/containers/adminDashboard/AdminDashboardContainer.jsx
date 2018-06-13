import React, {Component} from "react";
import {connect} from "react-redux";

import {Route, Switch} from "react-router-dom";
import AdminUsersContainer from "./AdminUsersContainer";
import AdminTransactionsContainer from "./AdminTransactionsContainer";
import AdminManageTokensContainer from "./AdminManageTokensContainer";
import AdminTabNavigatorContainer from "../tabNavigator/AdminTabNavigatorContainer";
import {requireAdminAuth} from "../../routing/routingUtils";

class AdminDashboardContainer extends Component{

    componentWillMount = ()=>
        requireAdminAuth(null, this.props.history.replace, this.props.authorizationData)

    render = () =>
        <div className="row no-gutters mnh-100 align-items-md-start align-items-lg-stretch">
            <AdminTabNavigatorContainer/>
            <div className="col-lg-10 mnh-100 bg-white rounded shadow">
                <div className="tab-content p-4 mnh-100" id="v-pills-tabContent">
                    <Switch>
                        <Route exact path='/adminDashboard' component={AdminUsersContainer}/>
                        <Route exact path='/adminDashboard/users' component={AdminUsersContainer}/>
                        <Route exact path='/adminDashboard/transactions' component={AdminTransactionsContainer}/>
                        <Route exact path='/adminDashboard/manageTokens' component={AdminManageTokensContainer}/>
                    </Switch>
                </div>
            </div>
        </div>
}


const mapStateToProps = (state) => {
    return {
        authorizationData: state.userReducer.authorizationData
    }
}

export default connect(mapStateToProps)(AdminDashboardContainer);