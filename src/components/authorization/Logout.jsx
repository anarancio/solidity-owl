
import React, {Component} from "react";
import {Link} from "react-router-dom";


export default class Logout extends Component{

    render =()=>
        <div className={"mt-lg-5 pr-lg-3 pt-2 pt-md-0 ml-md-auto"}>
            <Link to="/"
                  className={"btn btn-primary btn-block rounded shadow-sm"}
                  onClick={()=>{this.props.onLogout()}}
            >
                LOG OUT
            </Link>
        </div>

}

