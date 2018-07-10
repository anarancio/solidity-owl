import React, {Component} from "react";

export default class LogToggleComponent extends Component{

    constructor(props) {
        super(props);
        this.handleToggleEvent = this.handleToggleEvent.bind(this);
    }

    handleToggleEvent = () => {
        const data = {
            name: this.props.name,
            idx: this.props.idx,
            listening: this.props.listening
        };
        this.props.toggleEvent(data);
    }

    render =()=> {
        let status = 'card bg-success mx-2 col-sm-2';
        if(!this.props.listening) {
            status = 'card bg-danger mx-2 col-sm-2';
        }
        return <div className={status} id="boxEventWidget_{this.props.name}" onClick={this.handleToggleEvent}>
                    <div className="card-body text-white">
                    <div className="form-check">
                        <label className="form-check-label">{this.props.name}</label>
                    </div>
                    </div>
                </div>
    }

}