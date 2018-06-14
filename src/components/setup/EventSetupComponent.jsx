import React, {Component} from "react";


export default class EventSetupComponent extends Component{

    render =()=>
        <div className="row">
            <div className="col-sm-3 col-md-2">
                <button id="btnWatchAll" type="button" className="btn btn-success btn-block mb-3">Watch All</button>
                <button id="btnUnWatchAll" type="button" className="btn btn-danger btn-block">Unwatch All</button>
            </div>
            <div className="col-sm-9 col-md-10">
                <div className="scroller">
                    <div id="boxEventsContainer" className="row flex-nowrap">
                    </div>
                </div>
            </div>
        </div>

}