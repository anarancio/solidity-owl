import React, {Component} from "react";


export default class EventLogWidget extends Component {

    render =()=> {
            const id = "collapse-" + this.props.id;
            const dataTarget = "#" + id;

            return <div className="card mt-3">
                        <div className="card-header" id="heading-1">
                            <h5 className="mb-0">
                                <button className="btn btn-link btn-block text-left d-flex" data-toggle="collapse" data-target={dataTarget} aria-expanded="true" aria-controls={id}>
                                    {this.props.name} <small className="ml-auto">expand</small>
                                </button>
                            </h5>
                        </div>

                        <div id={id} className="collapse" aria-labelledby="heading-1" data-parent="#accordion">
                            <div className="card-body">
                                <dl className="row">
                                    <dt className="col-sm-3 col-md-2">Event Name:</dt>
                                    <dd className="col-sm-9 col-md-10">{this.props.name}</dd>

                                    <dt className="col-sm-3 col-md-2">Address:</dt>
                                    <dd className="col-sm-9 col-md-10">{this.props.address}</dd>

                                    <dt className="col-sm-3 col-md-2">Transaction hash:</dt>
                                    <dd className="col-sm-9 col-md-10">{this.props.transactionHash}</dd>

                                    <dt className="col-sm-3 col-md-2">Transaction Index:</dt>
                                    <dd className="col-sm-9 col-md-10">{this.props.transactionIndex}</dd>

                                    <dt className="col-sm-3 col-md-2">Block Hash:</dt>
                                    <dd className="col-sm-9 col-md-10">{this.props.blockHash}</dd>

                                    <dt className="col-sm-3 col-md-2">Block Number:</dt>
                                    <dd className="col-sm-9 col-md-10">{this.props.blockNumber}</dd>

                                    <dt className="col-sm-3 col-md-2">Log Index:</dt>
                                    <dd className="col-sm-9 col-md-10">{this.props.logIndex}</dd>

                                    <dt className="col-sm-3 col-md-2">Raw:</dt>
                                    <dd className="col-sm-9 col-md-10">{JSON.stringify(this.props.raw)}</dd>

                                    <dt className="col-sm-3 col-md-2">Return Values:</dt>
                                    <dd className="col-sm-9 col-md-10">{JSON.stringify(this.props.returnValues)}</dd>

                                    <dt className="col-sm-3 col-md-2">Signature:</dt>
                                    <dd className="col-sm-9 col-md-10">{this.props.signature}</dd>

                                    <dt className="col-sm-3 col-md-2">Type:</dt>
                                    <dd className="col-sm-9 col-md-10">{this.props.type}</dd>
                                </dl>
                            </div>
                        </div>
                    </div>
    }
        

}