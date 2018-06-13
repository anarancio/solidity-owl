import React, {Component} from "react";

import SetupComponent from "../setup/SetupComponent";
import EventSetupComponent from "../setup/EventSetupComponent";
import LogsActions from "../logs/LogsActions";

export default class HeaderComponent extends Component{

    render =()=>
        <header class="bg-dark">
            <div class="container-fluid pb-3">                
                <SetupComponent />                
                <EventSetupComponent />                
            </div>
            <div class="bg-secondary container-fluid">
                <LogsActions />
            </div>
        </header>

}