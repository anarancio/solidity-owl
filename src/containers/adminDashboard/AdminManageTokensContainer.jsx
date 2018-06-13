import React, {Component} from "react";
import {connect} from "react-redux";

class AdminManageTokensContainer extends Component{


    render=()=>{
        return <div>
            Manage tokens
        </div>
    }
}


const mapStateToProps = (state) => {
    return {selectedTabIdx: state.tabReducer.selectedTabIdx}
}

export default connect(mapStateToProps)(AdminManageTokensContainer);
