import React, {Component} from "react";
import {connect} from "react-redux";

import TextInput from "../../genericComponents/TextInput"


class SetupComponent extends Component {

    constructor(props) {
        super(props);
        this.handleEthUrlChange = this.handleEthUrlChange.bind(this);
        this.state = {
            ethUrl: this.props.ethUrl,
            ethUrlValid: (this.props.ethUrl != ''),
            contractAddr: this.props.contractAddr,
            contractAddrValid: (this.props.contractAddr != ''),
            contractAbi: this.props.contractAbi,
            contractAbiValid: (this.props.contractAbi != '')
        }
    }

    handleEthUrlChange = (event) =>{
        this.setState({
                        ethUrl: event.target.value,
                        ethUrlValid: (event.target.value != '')
                    });
    }

    handleContractAddressChange = (event) => {
        this.setState({
            contractAddr: event.target.value,
            contractAddrValid: (event.target.value != '')
        });
    }

    handleContractAbiChange = (event) => {
        this.setState({
            contractAbi: event.target.value,
            contractAbiValid: (event.target.value != '')
        });
    }

    render =()=>
        <div class="row">
            <div class="col-sm-12 pt-2 pb-2 bg-secondary mb-4">
                <div class="d-block" id="navbarSupportedContent">
                    <div class="form-group">
                        <TextInput
                                placeholder={"Ethereum endpoint (ex.: http://localhost:8545)"}
                                value={this.state.ethUrl}
                                validValue={this.state.ethUrlValid}
                                handleChange={this.handleEthUrlChange}
                                inputWrapperClass={"form-control"} />
                    </div>
                    <div class="form-group">
                        <TextInput
                                placeholder={"contract address"}
                                value={this.state.contractAddr}
                                validValue={this.state.contractAddrValid}
                                handleChange={this.handleContractAddressChange}
                                inputWrapperClass={"form-control"} />
                    </div>
                    <div class="form-group">
                        <TextInput
                                placeholder={"contract ABI"}
                                value={this.state.contractAbi}
                                validValue={this.state.contractAbiValid}
                                handleChange={this.handleContractAbiChange}
                                inputWrapperClass={"form-control"} />
                    </div>
                    <div class="text-right">
                        <button id="btnConnect" type="button" class="btn btn-primary">Connect</button>
                        <button id="btnDisconnect" type="button" class="btn btn-danger disabled">Disconnect</button>
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

export default connect(mapStateToProps)(SetupComponent);