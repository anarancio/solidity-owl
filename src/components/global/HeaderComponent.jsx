import React, {Component} from "react";

import SetupComponent from "../setup/SetupComponent";

export default class HeaderComponent extends Component{

    render =()=>
        <header class="bg-dark">
            <div class="container-fluid pb-3">
                <div class="row">
                    <SetupComponent />
                </div>                
                <div class="row">
                    <div class="col-sm-3 col-md-2">
                        <button id="btnWatchAll" type="button" class="btn btn-success btn-block mb-3">Watch All</button>
                        <button id="btnUnWatchAll" type="button" class="btn btn-danger btn-block">Unwatch All</button>
                    </div>
                    <div class="col-sm-9 col-md-10">
                        <div class="scroller">
                            <div id="boxEventsContainer" class="row flex-nowrap">
                            </div>
                        </div>
                    </div>
                </div>
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