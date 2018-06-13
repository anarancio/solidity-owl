import React, {Component} from "react";
import {connect} from "react-redux";
import GenericModal from "../../genericComponents/GenericModal";

import ReactTable from "react-table";
import "react-table/react-table.css";
import {userModel} from "../../apiModels/userTablesModels";


//TODO this must be converted to React components
const modalContent = <div>
    <ul className="nav nav-tabs" id="myTab" role="tablist">
    <li className="nav-item mr-1">
    <a className="nav-link active" id="dots-tab" data-toggle="tab" href="#dots" role="tab" aria-controls="dots" aria-selected="true">DOTS</a>
</li>
<li className="nav-item mr-1">
    <a className="nav-link" id="deposits-tab" data-toggle="tab" href="#deposits" role="tab" aria-controls="deposits" aria-selected="false">DEPOSITS</a>
    </li>
    <li className="nav-item">
        <a className="nav-link" id="transct-tab" data-toggle="tab" href="#transct" role="tab" aria-controls="transct" aria-selected="false">TRANSACTION</a>
    </li>
    </ul>
    <div className="tab-content" id="myTabContent">
        <div className="tab-pane py-4 px-1 fade show active" id="dots" role="tabpanel" aria-labelledby="dots-tab">
            <form>
                <div className="form-group row">
                    <label htmlFor="inputName" className="col-sm-2 col-form-label">Name:</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="inputName" value="Jhon Holmes"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="inputMail" className="col-sm-2 col-form-label">Email:</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="inputMail" value="j_holmes@email.com"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="selectStatus" className="col-sm-2 col-form-label">Status:</label>
                    <div className="col-sm-10">
                        <select className="form-control" name="status" id="selectStatus">
                            <option>Active</option>
                            <option>Inactive</option>
                        </select>
                    </div>
                </div>
            </form>
        </div>
        <div className="tab-pane py-4 px-1 fade" id="deposits" role="tabpanel" aria-labelledby="deposits-tab">
            <div className="table-responsive">
                <table className="table table-striped table-sm table-hover">
                    <thead className="thead-dark">
                    <tr>
                        <th scope="col">Date <i className="fas fa-sort text-primary ml-2 "></i></th>
                        <th scope="col" className="text-center">Amount <i className="fas fa-sort-up text-primary ml-2 "></i></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>2018/04/01</td>
                        <td className="text-center">960</td>
                    </tr>
                    <tr>
                        <td>2018/03/11</td>
                        <td className="text-center">160</td>
                    </tr>
                    <tr>
                        <td>2018/02/21</td>
                        <td className="text-center">96</td>
                    </tr>
                    <tr>
                        <td>2018/03/11</td>
                        <td className="text-center">10</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div className="tab-pane py-4 px-1 fade" id="transct" role="tabpanel" aria-labelledby="transct-tab">
            <div className="table-responsive">
                <table className="table table-striped table-sm table-hover2">
                    <thead className="thead-dark">
                    <tr>
                        <th scope="col">Destination</th>
                        <th scope="col">Date</th>
                        <th scope="col" className="text-center">Amount</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>reto53489113dsf15431sd151133d13241989</td>
                        <td>2018/04/01</td>
                        <td className="text-center">30</td>
                    </tr>
                    <tr>
                        <td>reto68438784ddad168461d16aje946333</td>
                        <td>2018/03/11</td>
                        <td className="text-center">10</td>
                    </tr>
                    <tr>
                        <td>reto53489113dsf15431sd151133d13241989</td>
                        <td>2018/02/21</td>
                        <td className="text-center">22</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>

const modalFooter = <div className="modal-footer justify-content-center">
    <button type="button" className="btn btn-warning shadow-none rounded text-white px-5" data-dismiss="modal">CANCEL</button>
    <button type="button" className="btn btn-primary shadow-none rounded px-5">SAVE</button>
</div>


class AdminUsersContainer extends Component{

    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }



    render() {
        let dummyUsers = [
            {
                fullName: "Jhon Holmes",
                email: "j_holmes@email.com",
                transactions: 50,
                state: "Active",
                edit: (
                    <button type="button" className="btn btn-link btn-sm" onClick={this.toggle}>Edit</button>)

            }
        ];
        return (
            <div>
                <div className="mt-5">
                    <ReactTable
                        data={dummyUsers}
                        columns={userModel}
                        style={{fontFamily:'Montserrat'}}
                        defaultPageSize={5}
                        className="-striped -highlight"
                    />
                </div>
                <GenericModal modalOpen={this.state.modal}
                       toggle={this.toggle}
                       modalFooter={modalFooter}
                              modalBody={modalContent}
                              headerText={<h3 className="text-center mb-3">John Holmes</h3>}
                />
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {selectedTabIdx: state.tabReducer.selectedTabIdx}
}

export default connect(mapStateToProps)(AdminUsersContainer);
