import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import {toggleEvent} from "../../actions/listenActions"

class LogToggleComponent extends Component{

    constructor(props) {
        super(props);
        this.handleToggleEvent = this.handleToggleEvent.bind(this);
    }

    handleToggleEvent = (event) => {
        const data = {
            name: this.props.name,
            idx: this.props.idx,
            listening: this.props.listening
        };
        this.props.toggleEvent(data);
    }

    render =()=> {
        let status = 'card bg-success mx-3 col-sm-3';
        if(!this.props.listening) {
            status = 'card bg-danger mx-3 col-sm-3';
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

const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({toggleEvent: toggleEvent}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(LogToggleComponent);