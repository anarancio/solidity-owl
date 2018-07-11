import React, {Component} from "react";
import {connect} from "react-redux";

import HeaderContainer from "./HeaderContainer";
import EventLogContainer from "./EventLogContainer";

class MainContainer extends Component{
   

    render = () =>
        <div>
            <HeaderContainer />
            <EventLogContainer />
        </div>
}



export default connect()(MainContainer);