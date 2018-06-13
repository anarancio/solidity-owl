import React, {Component} from "react";
import {Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";


export default class GenericModal extends Component{

    render() {
        return (
                <Modal isOpen={this.props.modalOpen} toggle={this.props.toggle} >
                     <ModalHeader toggle={this.props.toggle}>
                        {this.props.headerText}
                     </ModalHeader>
                    <ModalBody>
                        <div className="modal-body">
                            {this.props.modalBody}
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <div className="modal-footer justify-content-center">
                            {this.props.modalFooter}
                        </div>
                    </ModalFooter>
                </Modal>
        );
    }

}