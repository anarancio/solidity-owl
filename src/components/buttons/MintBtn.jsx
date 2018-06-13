import React, {Component} from "react";
import LoginForm from "../../genericComponents/login/LoginForm.jsx";
import ModalForgotPassword from "../../genericComponents/login/ModalForgotPassword";


export default class MintBtn extends Component{

    render =()=>
        <i className="fas fa-check-circle mx-1 text-success fa-1x" onClick={() => {alert("Mint transaction "+this.props.id)}}></i>



}