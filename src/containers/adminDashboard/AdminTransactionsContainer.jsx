import React, {Component} from "react";
import {connect} from "react-redux";
import {dummyTransactions} from "../../dummyData";
import {adminTransactionModel} from "../../apiModels/transactionTablesModels";


import ReactTable from "react-table";
import "react-table/react-table.css";

class AdminTransactionsContainer extends Component{


    render=()=>{
        return <div>
            <div className="row">
                <div className="col-8">
                    <input type="text" className="form-control" placeholder="Search" aria-label="search" aria-describedby=""/>
                </div>
                <div className="col">
                    <button className="btn btn-primary btn-block shadow-none rounded" type="button">SEARCH</button>
                </div>
            </div>
            <div className="mt-5">
                <ReactTable
                    data={dummyTransactions}
                    columns={adminTransactionModel}
                    style={{fontFamily:'Montserrat'}}
                    defaultPageSize={5}
                    className="-striped -highlight"
                />
            </div>
        </div>
    }
}


const mapStateToProps = (state) => {
    return {selectedTabIdx: state.tabReducer.selectedTabIdx}
}

export default connect(mapStateToProps)(AdminTransactionsContainer);
