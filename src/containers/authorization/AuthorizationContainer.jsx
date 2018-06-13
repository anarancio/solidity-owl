import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {login} from "../../actions/authorizationActions"
import Login from "../../components/authorization/Login";
import {ADMIN_ROLE} from "../../config/applicationConstants";

class AuthorizationContainer extends Component{

    render =()=>
        <Login
            onLogin={this.onLoginClick}
        />

    onLoginClick = (e, username, password) =>{
        e.preventDefault();
        const loginData= {
            username: username,
            password: password,
        }
        this.props.login(loginData).then(()=>{
            if(this.props.authorizationData.role === ADMIN_ROLE){
                this.props.history.push('/adminDashboard');
            }else{
                this.props.history.push('/userDashboard');
            }

        });
    }
}

const mapStateToProps = (state) => {
    return {authorizationData: state.userReducer.authorizationData}
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({login: login}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthorizationContainer);