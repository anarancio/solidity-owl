import React, {Component} from "react";


export default class HeaderComponent extends Component{

    render =()=>
        <header class="bg-dark">
            <div class="container-fluid pb-3">
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
                <div class="row">
                    <div class="col-sm-12 pt-2 pb-2 mb-4">
                        <div class="input-group">
                            <input id="txtEventName" type="text" class="form-control" placeholder="Event name" aria-label="Event name" aria-describedby="basic-addon2"></input>
                            <div class="input-group-append">
                                <button class="btn btn-outline-secondary" type="button" id="btnAddEvent"><svg class="svg-inline--fa fa-plus fa-w-14" aria-hidden="true" data-prefix="fas" data-icon="plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M448 294.2v-76.4c0-13.3-10.7-24-24-24H286.2V56c0-13.3-10.7-24-24-24h-76.4c-13.3 0-24 10.7-24 24v137.8H24c-13.3 0-24 10.7-24 24v76.4c0 13.3 10.7 24 24 24h137.8V456c0 13.3 10.7 24 24 24h76.4c13.3 0 24-10.7 24-24V318.2H424c13.3 0 24-10.7 24-24z"></path></svg></button>
                            </div>
                        </div>
                    </div>
                </div>
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
            </div>
            <div class="bg-secondary container-fluid">
                <div class="row">
                    <div class="col-sm-12 text-right">
                        <button type="button" class="btn btn-link text-white"><i class="fas fa-reply"></i></button>
                        <button id="btnRemoveLogs" type="button" class="btn btn-link text-white"><i class="fas fa-trash"></i></button>
                    </div>
                </div>
            </div>
        </header>

}