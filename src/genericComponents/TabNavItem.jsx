import React, {Component} from "react";
import {Link} from "react-router-dom";


export default class TabNavItem extends Component{

    render = () =>{
        let classList = "";
        this.props.activeTab ?
            (classList = "nav-link mt-2 mt-md-0 mt-lg-2 mr-md-2 mr-lg-0 active") :
            (classList = "nav-link mt-2 mt-md-0 mt-lg-2 mr-md-2 mr-lg-0");
        return <Link className={classList} to={this.props.route} onClick={(idx)=>this.props.handleClick(idx)}>
            {this.props.navItemContent}
        </Link>
    }

}
