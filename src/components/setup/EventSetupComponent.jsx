import React, {Component} from "react";


export default class EventSetupComponent extends Component{

    render =()=>
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

}