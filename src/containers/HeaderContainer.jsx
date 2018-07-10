import React, {Component} from "react";
import {connect} from "react-redux";

import SetupComponent from "./SetupContainer";
import SetupInfoComponent from "./SetupInfoContainer";
import EventSetupComponent from "./EventSetupContainer";
import LogsActions from "../components/log/LogsActions";

class HeaderContainer extends Component{

    constructor(props) {
        super(props);
        this.setupCmp = this.setupCmp.bind(this);
    }

    setupCmp = () => {
        if(this.props.connected) {
            return <SetupInfoComponent />
        } else {
            return <SetupComponent />
        }
    }

    render =()=>
        <header className="bg-dark">
            <div className="container-fluid pb-3">
                {this.setupCmp()}
                <EventSetupComponent />                
            </div>
            <div className="bg-secondary container-fluid">
                <LogsActions />
            </div>
        </header>

}

const mapStateToProps = (state) => {
    return {
        connected: state.configReducer.connected
    }
}

export default connect(mapStateToProps)(HeaderContainer);