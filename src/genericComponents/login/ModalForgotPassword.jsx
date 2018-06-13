import React, {Component} from "react";

export default class ModalForgotPassword extends Component{

    render =()=>
        <div className="modal fade" id="forgotModal" tabIndex="-1" role="dialog" aria-labelledby="forgotModalTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-sm" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLongTitle">Modal title</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="form-group">
                                <label htmlFor="mailForgot">Email</label>
                                <input type="email" className="form-control" id="mailForgot" aria-describedby="emailHelp" placeholder="Enter email"/>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer justify-content-center">
                        <button type="button" className="btn btn-primary shadow-none rounded px-5">CHANGE</button>
                    </div>
                </div>
            </div>
        </div>


}