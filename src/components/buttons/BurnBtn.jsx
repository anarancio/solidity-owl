import React, {Component} from "react";
import LoginForm from "../../genericComponents/login/LoginForm.jsx";
import ModalForgotPassword from "../../genericComponents/login/ModalForgotPassword";


export default class BurnBtn extends Component{

    render =()=>
        <i className="fas fa-times-circle mx-1 text-danger fa-1x" onClick={() => {alert("Burn transaction " + this.props.id)}}></i>


}