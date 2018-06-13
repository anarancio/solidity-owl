import React, {Component} from "react";
import Button from "../Button";

export default class LoginForm extends Component{

    constructor(props) {
        super(props);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);

        this.state = {
            usernameInput: "",
            passwordInput: ""
        }
    }


    render =()=>{
        return <form onSubmit={(e)=>{this.props.onLogin(e, this.state.usernameInput, this.state.passwordInput)}} className="w-100 mw-350">
            <h2 className="text-center mb-3 text-dark">{this.props.title}</h2>
            <div className="shadow p-3 bg-white rounded-top">
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="User"
                        value={this.state.usernameInput}
                        onChange={this.handleUsernameChange}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Password"
                        value={this.state.passwordInput}
                        onChange={this.handlePasswordChange}

                    />
                </div>
                { this.props.onForgotPasswordClick &&
                <Button
                    classList={"btn btn-link btn-sm mx-auto w-50 d-block text-secondary"}
                    btnContent={this.props.forgotPasswordText}
                    type={"button"}
                />
                }
            </div>
            <Button
                classList={"btn btn-primary btn-block mt-2 shadow-sm rounded-bottom"}
                btnContent={this.props.loginBtnContent}
                type={"submit"}
            />
            {this.props.signUpContent}
        </form>

    }



    handleUsernameChange = (event) =>{
        this.setState({usernameInput: event.target.value});
    }


    handlePasswordChange = (event) =>{
        this.setState({passwordInput: event.target.value});
    }



}