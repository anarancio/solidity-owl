import React, {Component} from "react";

import SetupComponent from "../setup/SetupComponent";
import EventSetupComponent from "../setup/EventSetupComponent";

export default class HeaderComponent extends Component{

    render =()=>
        <header class="bg-dark">
            <div class="container-fluid pb-3">                
                <SetupComponent />                
                <EventSetupComponent />                
            </div>
            <div class="bg-secondary container-fluid">
                <div class="row">
                    <div class="col-sm-12 text-right">
                        <button type="button" class="btn btn-link text-white"><i class="fas fa-reply"></i></button>
                        <button id="btnRemoveLogs" type="button" class="btn btn-link text-white"><i class="fas fa-trash"></i></button>
                    </div>
                </div>
            </div>
        </header>

}