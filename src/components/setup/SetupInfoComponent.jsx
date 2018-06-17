import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import {disconnectFromEth} from "../../actions/connectActions"

class SetupInfoComponent extends Component {

    constructor(props) {
        super(props);
        this.disconnectFromEth = this.disconnectFromEth.bind(this);
        this.state = {
            ethUrl: this.props.ethUrl,
            contractAddr: this.props.contractAddr
        }
    }

    disconnectFromEth = (e) => {
        e.preventDefault();
        this.props.disconnectFromEth();
    }

    render =()=>
        <div className="row">
            <div className="col-sm-12 pt-2 pb-2 bg-secondary mb-4">
                <div className="d-block" id="navbarSupportedContent">
                    <div className="form-group">
                        URL: {this.state.ethUrl}
                    </div>
                    <div className="form-group">
                        Contract Address: {this.state.contractAddr}
                    </div>
                    <div className="text-right">
                        <button id="btnDisconnect" type="button" className="btn btn-danger" onClick={this.disconnectFromEth}>Disconnect</button>
                    </div>
                </div>
            </div>
        </div>

}

const mapStateToProps = (state) => {
    return {
        ethUrl: state.configReducer.ethUrl,
        contractAddr: state.configReducer.contractAddr,
        contractAbi: state.configReducer.contractAbi
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({disconnectFromEth: disconnectFromEth}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SetupInfoComponent);