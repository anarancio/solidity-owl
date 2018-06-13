import React, {Component} from "react";
import LoginForm from "../../genericComponents/login/LoginForm.jsx";
import ModalForgotPassword from "../../genericComponents/login/ModalForgotPassword";


export default class Login extends Component{

    render =()=>
        <div className={"mnh-100 d-flex justify-content-center align-items-center"}>
            <LoginForm
                title={"SIGN IN"}
                onLogin={this.props.onLogin}
                loginBtnContent={"LOGIN"}
                onForgotPasswordClick={()=>{}}
                forgotPasswordText={"¿Forgot your password?"}
                signUpContent={
                                <p className="mt-3 text-center text-dark">
                                    If you have not created an account, <br/>
                                    please go to the <a href="register.html" className="font-weight-bold">registration page</a>
                                </p>
                              }

            />
            <ModalForgotPassword/>
        </div>

}