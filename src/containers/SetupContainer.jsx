import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import TextInput from "../genericComponents/TextInput"
import {connectToEth} from "../actions/connectActions"


class SetupContainer extends Component {

    constructor(props) {
        super(props);
        this.handleEthUrlChange = this.handleEthUrlChange.bind(this);
        this.connectToEth = this.connectToEth.bind(this);
        this.state = {
            ethUrl: this.props.ethUrl,
            ethUrlValid: (this.props.ethUrl !== ''),
            contractAddr: this.props.contractAddr,
            contractAddrValid: (this.props.contractAddr !== ''),
            contractAbi: this.props.contractAbi,
            contractAbiValid: (this.props.contractAbi !== '')
        }
    }

    handleEthUrlChange = (event) =>{
        this.setState({
            ethUrl: event.target.value,
            ethUrlValid: (event.target.value !== '')
        });
    }

    handleContractAddressChange = (event) => {
        this.setState({
            contractAddr: event.target.value,
            contractAddrValid: (event.target.value !== '')
        });
    }

    handleContractAbiChange = (event) => {
        this.setState({
            contractAbi: event.target.value,
            contractAbiValid: (event.target.value !== '')
        });
    }

    connectToEth = (e) => {
        e.preventDefault();
        if(this.state.ethUrl !== '' && this.state.contractAddr !== '' && this.state.contractAbi !== '') {
            const connectData = {
                ethUrl: this.state.ethUrl,
                contractAddr: this.state.contractAddr,
                contractAbi: this.state.contractAbi,
            };
            
            this.props.connectToEth(connectData);
        } else {
            //TODO use custom address
            alert("You must fill all the fields");
        }
    }

    render =()=>
        <div className="row">
            <div className="col-sm-12 pt-2 pb-2 bg-secondary mb-4">
                <div className="d-block" id="navbarSupportedContent">
                    <div className="form-group">
                        <TextInput
                                placeholder={"Ethereum endpoint (ex.: http://localhost:8545)"}
                                value={this.state.ethUrl}
                                validValue={this.state.ethUrlValid}
                                handleChange={this.handleEthUrlChange}
                                inputWrapperClass={"form-control"} />
                    </div>
                    <div className="form-group">
                        <TextInput
                                placeholder={"contract address"}
                                value={this.state.contractAddr}
                                validValue={this.state.contractAddrValid}
                                handleChange={this.handleContractAddressChange}
                                inputWrapperClass={"form-control"} />
                    </div>
                    <div className="form-group">
                        <TextInput
                                placeholder={"contract ABI"}
                                value={this.state.contractAbi}
                                validValue={this.state.contractAbiValid}
                                handleChange={this.handleContractAbiChange}
                                inputWrapperClass={"form-control"} />
                    </div>
                    <div className="text-right">
                        <button id="btnConnect" type="button" className="btn btn-primary" onClick={this.connectToEth}>Connect</button>
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
    return bindActionCreators({connectToEth: connectToEth}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SetupContainer);