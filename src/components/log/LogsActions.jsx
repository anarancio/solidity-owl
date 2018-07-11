import React, {Component} from "react";


export default class LogsActions extends Component{

    render =()=>
        <div className="row">
            <div className="col-sm-12 text-right">
                <button type="button" className="btn btn-link text-white"><i className="fas fa-reply"/></button>
                <button id="btnRemoveLogs" type="button" className="btn btn-link text-white"><i className="fas fa-trash"/></button>
            </div>
        </div>

}