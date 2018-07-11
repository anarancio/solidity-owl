import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {setSelectedTabIndex} from "../../actions/tabActions";
import TabNavItem from "../../genericComponents/TabNavItem";

class TabNavigatorContainer extends Component{

    render=()=>{
        return <div className="col-lg-3 pt-lg-4 position-relative z-1">
            <nav className="navbar navbar-expand-lg navbar-light p-0 pb-3">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <div className="nav flex-column align-items-md-center align-items-lg-stretch flex-md-row flex-lg-column nav-pills w-100 py-4 py-lg-0" aria-orientation="vertical">

                        <TabNavItem navItemContent ={<span>Events</span>}
                                    handleClick = {()=> this.setTabIndex(0)}
                                    activeTab = {this.props.selectedTabIdx === 0}
                                    route={"/events"}
                        />

                        <TabNavItem navItemContent ={<span>Transactions</span>}
                                    handleClick = {()=>{
                                        this.setTabIndex(1)
                                    }
                                    }
                                    activeTab = {this.props.selectedTabIdx === 1}
                                    route={"/transactions"}
                        />

                        <TabNavItem navItemContent ={<span>Transactions</span>}
                                    handleClick = {()=>{
                                        this.setTabIndex(2)
                                    }
                                    }
                                    activeTab = {this.props.selectedTabIdx === 2}
                                    route={"/blocks"}
                        />

                        <TabNavItem navItemContent ={<span>Contract</span>}
                                    handleClick = {()=> this.setTabIndex(3)}
                                    activeTab = {this.props.selectedTabIdx === 3}
                                    route={"/contracts"}
                        />

                        <TabNavItem navItemContent ={<span>Addresses</span>}
                                    handleClick = {()=> this.setTabIndex(4)}
                                    activeTab = {this.props.selectedTabIdx === 4}
                                    route={"/addresses"}
                        />



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
    }
}

const mapDispatchToProps = (dispatch) => {
    const actions = {
        setSelectedTabIndex: setSelectedTabIndex,
    };
    return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TabNavigatorContainer);
