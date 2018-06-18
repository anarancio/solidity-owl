import React, {Component} from "react";

export default class LogToggleComponent extends Component{

    render =()=> {
        let status = 'card bg-success mx-3 col-sm-3';
        if(!this.props.listening) {
            status = 'card bg-danger mx-3 col-sm-3';
        }
        return <div className={status} id="boxEventWidget_{this.props.name}">
                    <div className="card-body text-white">
                    <div className="form-check">
                        <label className="form-check-label">{this.props.name}</label>
                    </div>
                    </div>
                </div>
    }

}