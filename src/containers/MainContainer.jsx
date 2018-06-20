import React, {Component} from "react";
import {connect} from "react-redux";

import HeaderComponent from "../components/global/HeaderComponent";
import LogsComponent from "../components/logs/LogsComponent";

class MainContainer extends Component{
   

    render = () =>
        <div>
            <HeaderComponent />
            <LogsComponent />
        </div>
}


const mapStateToProps = (state) => {
    return {
        //authorizationData: state.userReducer.authorizationData
    }
}

export default connect(mapStateToProps)(MainContainer);