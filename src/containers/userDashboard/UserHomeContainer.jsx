import React, {Component} from "react";
import {connect} from "react-redux";
import {dummySendTokens} from "../../dummyData";
import {userHomeTrModel} from "../../apiModels/transactionTablesModels";

import ReactTable from "react-table";
import "react-table/react-table.css";


class UserHomeContainer extends Component{


    render=()=>{
        return <div>
            <h2 className="mb-5">BALANCE: <span className="badge badge-tokens ml-2 mb-1">250 tokens</span></h2>
            <h3 className="font-weight-bold">Transactions Received</h3>
            <div className="table-responsive mt-2">
                <ReactTable
                    data={dummySendTokens}
                    columns={userHomeTrModel}
                    style={{fontFamily:'Montserrat'}}
                    defaultPageSize={5}
                    className="-striped -highlight"
                />
            </div>

            <h3 className="font-weight-bold mt-5">Transactions Made</h3>
            <div className="table-responsive mt-2">
                <ReactTable
                    data={dummySendTokens}
                    columns={userHomeTrModel}
                    style={{fontFamily:'Montserrat'}}
                    defaultPageSize={5}
                    className="-striped -highlight"
                />
            </div>
        </div>
    }

}

export default connect()(UserHomeContainer);