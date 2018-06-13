import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {setSelectedTabIndex} from "../../actions/tabActions";
import TabNavItem from "../../genericComponents/tabNavBar/tabNavItem";
import Logout from "../../components/authorization/Logout";
import {logout} from "../../actions/authorizationActions";

class UserTabNavigatorContainer extends Component{

    render=()=>{
        return <div className="col-lg-2 pt-lg-4 position-relative z-1">
            <nav className="navbar navbar-expand-lg navbar-light p-0 pb-3">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <div className="nav flex-column align-items-md-center align-items-lg-stretch flex-md-row flex-lg-column nav-pills w-100 py-4 py-lg-0" aria-orientation="vertical">
                        {
                            this.props.authorizationData !== undefined
                            &&
                            <h4 style={{fontFamily:"Dosis"}}> {this.props.authorizationData.username}</h4>

                        }

                        <TabNavItem navItemContent ={<div><i className="fas fa-fw mr-2 fa-home"></i>HOME</div>}
                                    handleClick = {()=> this.setTabIndex(0)}
                                    activeTab = {this.props.selectedTabIdx === 0}
                                    route={"/userDashboard/home"}
                        />

                        <TabNavItem navItemContent ={<div><i className="fas fa-fw mr-2 fa-exchange-alt"></i>TRANSACTIONS</div>}
                                    handleClick = {()=> this.setTabIndex(1)}
                                    activeTab = {this.props.selectedTabIdx === 1}
                                    route={"/userDashboard/transactions"}
                        />

                        <TabNavItem navItemContent ={<div><i className="fas fa-fw mr-2 fa-share-square"></i>SEND TOKENS</div>}
                                    handleClick = {()=> this.setTabIndex(2)}
                                    activeTab = {this.props.selectedTabIdx === 2}
                                    route={"/userDashboard/sendTokens"}
                        />

                        <TabNavItem navItemContent ={<div><i className="fas fa-fw mr-2 fa-database"></i>BANK DEPOSITS</div>}
                                    handleClick = {()=> this.setTabIndex(3)}
                                    activeTab = {this.props.selectedTabIdx === 3}
                                    route={"/userDashboard/bankDeposits"}
                        />

                        <TabNavItem navItemContent ={<div><i className="fas fa-fw mr-2 fa-user"></i>PROFILE</div>}
                                    handleClick = {()=> this.setTabIndex(4)}
                                    activeTab = {this.props.selectedTabIdx === 4}
                                    route={"/userDashboard/userProfile"}
                        />

                        <Logout onLogout={()=>{this.props.logout()}} />

                    </div>
                </div>
            </nav>
        </div>
    }


    setTabIndex=(index)=>{
        this.props.setSelectedTabIndex(index);
    }
}


const mapStateToProps = (state) => {
    return {
        selectedTabIdx: state.tabReducer.selectedTabIdx,
        authorizationData: state.userReducer.authorizationData,
    }
}



const mapDispatchToProps = (dispatch) => {
    const actions = {
        setSelectedTabIndex: setSelectedTabIndex,
        logout: logout
    };
    return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(UserTabNavigatorContainer);
