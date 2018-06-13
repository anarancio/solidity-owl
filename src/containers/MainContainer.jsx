import React, {Component} from "react";
import {connect} from "react-redux";

import HeaderComponent from "../components/global/HeaderComponent"

class MainContainer extends Component{
   

    render = () =>
        <div>
            <HeaderComponent />
        </div>
}


const mapStateToProps = (state) => {
    return {
        //authorizationData: state.userReducer.authorizationData
    }
}

export default connect(mapStateToProps)(MainContainer);