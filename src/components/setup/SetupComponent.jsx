import React, {Component} from "react";


export default class SetupComponent extends Component{

    render =()=>
        <div class="row">
            <div class="col-sm-12 pt-2 pb-2 bg-secondary mb-4">
                <div class="d-block" id="navbarSupportedContent">
                    <div class="form-group">
                        <input id="txtConnectionUrl" type="text" class="form-control" placeholder="<URL:PORT> ex.: http://localhost:8545" aria-label="<URL:PORT> ex.: http://localhost:8545" aria-describedby="basic-addon2" value="ws://localhost:8545"></input>
                    </div>
                    <div class="form-group">
                        <input id="txtContractAddress" type="text" class="form-control" placeholder="contract address" aria-label="contract address" aria-describedby="basic-addon2" value="0x5D7fDc3e80b59E08fee14Ae43A00fDa3B48B0A3D"></input>
                    </div>
                    <div class="form-group">
                        <input id="txtContractAbi" type="text" class="form-control" placeholder="contract abi" aria-label="contract abi" aria-describedby="basic-addon2"></input>
                    </div>
                    <div class="text-right">
                        <button id="btnConnect" type="button" class="btn btn-primary">Connect</button>
                        <button id="btnDisconnect" type="button" class="btn btn-danger disabled">Disconnect</button>
                    </div>
                </div>
            </div>
        </div>

}