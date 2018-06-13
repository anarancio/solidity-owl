import React, {Component} from "react";
import {connect} from "react-redux";
import UserTabNavigatorContainer from "../tabNavigator/UserTabNavigatorContainer";
import UserHomeContainer from "./UserHomeContainer";
import UserTransactionsContainer from "./UserTransactionsContainer";
import {Route, Switch} from "react-router-dom";
import UserSendTokensContainer from "./UserSendTokensContainer";
import UserBankDepositsContainer from "./UserBankDepositsContainer";
import {requireAuth} from "../../routing/routingUtils";

class UserDashboardContainer extends Component{

    componentWillMount = ()=>
        requireAuth(null, this.props.history.replace, this.props.authorizationData)

    render = () =>
        <div className="row no-gutters mnh-100 align-items-md-start align-items-lg-stretch">
            <UserTabNavigatorContainer/>
            <div className="col-lg-10 mnh-100 bg-white rounded shadow">
                <div className="tab-content p-4 mnh-100" id="v-pills-tabContent">
                    <Switch>
                        <Route exact path='/userDashboard' component={UserHomeContainer}/>
                        <Route exact path='/userDashboard/home' component={UserHomeContainer}/>
                        <Route exact path='/userDashboard/transactions' component={UserTransactionsContainer}/>
                        <Route exact path='/userDashboard/sendTokens' component={UserSendTokensContainer}/>
                        <Route exact path='/userDashboard/bankDeposits' component={UserBankDepositsContainer}/>
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

export default connect(mapStateToProps)(UserDashboardContainer);