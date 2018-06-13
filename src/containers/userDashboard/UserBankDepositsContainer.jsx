import React,{Component} from 'react';
import {connect} from 'react-redux';

import ReactTable from "react-table";
import "react-table/react-table.css";


import {dummyDeposits} from "../../dummyData";
import {depositTransactionModel} from "../../apiModels/transactionTablesModels";

class UserBankDepositsContainer extends Component{
    
    render = () =>{
        return<div>
                <div className="row">
                    <div className="col col-md-4">
                        <input type="text" className="form-control" placeholder="Amount" aria-label="amount" aria-describedby=""/>
                    </div>
                    <div className="col col-md-3">
                        <button className="btn btn-primary btn-block shadow-none rounded" type="button">SEND</button>
                    </div>
                </div>
                <div className="mt-5">
                    <ReactTable
                        data={dummyDeposits}
                        columns={depositTransactionModel}
                        style={{fontFamily:'Montserrat'}}
                        defaultPageSize={5}
                        className="-striped -highlight"
                    />
                </div>

         </div>
    }

}

export default connect()(UserBankDepositsContainer);
