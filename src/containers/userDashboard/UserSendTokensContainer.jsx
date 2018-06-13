import React, {Component} from "react";
import {connect} from "react-redux";
import {userSendTokensModel} from "../../apiModels/transactionTablesModels";
import {dummySendTokens} from "../../dummyData";
import ReactTable from "react-table";
import "react-table/react-table.css";

class UserSendTokensContainer extends Component{


    render=()=>
         <div>
            <div className="row">
                <div className="col">
                    <input type="text" className="form-control" placeholder="Destination" aria-label="destination" aria-describedby=""/>
                </div>
                <div className="col">
                    <input type="text" className="form-control" placeholder="Amount" aria-label="amount" aria-describedby=""/>
                </div>
                <div className="col-sm-3 mt-2 mt-sm-0">
                    <button className="btn btn-primary btn-block shadow-none rounded" type="button" onClick={this.some}>SEND</button>
                </div>
            </div>
             <div className="table-responsive mt-5">
                <ReactTable
                    data={dummySendTokens}
                    columns={userSendTokensModel}
                    style={{fontFamily:'Montserrat'}}
                    defaultPageSize={5}
                    className="-striped -highlight"
                />
            </div>
        </div>
}



export default connect()(UserSendTokensContainer);