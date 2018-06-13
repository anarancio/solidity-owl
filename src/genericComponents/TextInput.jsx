/**
 * Generic TextInput:
 
 * Props:
 *  - value: the value of the input
 *  - inputWrapperClass: style class of the wrapper div
 *  - placeholder: placeholder of the input
 *  - validValue: boolean that represents if value is valid
 *  - invalidBorderStyle and invalidStyle: styles for input border and warning message
 *  - invalidText: text to show when the input value isnt valid
 *
 *  Usage:
 *
 *  constructor(props) {
        super(props);
        this.handleAmountChange = this.handleAmountChange.bind(this);
        this.state = {
            amountInput: "",
            amountValid: true
        }
    }

     handleAmountChange = (event) =>{
            this.setState({amountInput: event.target.value});
     }

     <TextInput
         placeholder={"Amount"}
         value={this.state.amountInput}
         handleChange={this.handleAmountChange}
         validValue={this.state.amountValid}
         invalidText={"Please provide a valid Amount"}
         inputWrapperClass={"col col-md-4"}

     />
 */


import React, {Component} from "react";

const defaultInvalidStyle = {
    width: "100%",
    marginTop: ".25rem",
    fontSize: "80%",
    color: "#dc3545"
};

const defaultInvalidBorderStyle = {
    borderColor:defaultInvalidStyle.color
}




export default class TextInput extends Component{

    render =() =>{

        return <div className={this.props.inputWrapperClass}>
                <input type="text" className="form-control" placeholder={this.props.placeholder}
                       value={this.props.value} onChange={this.props.handleChange}
                       style={!this.props.validValue ? (this.props.invalidBorderStyle ?
                              this.props.invalidBorderStyle : defaultInvalidBorderStyle) : null}/>

                { !this.props.validValue
                    &&
                    <div style={this.props.invalidStyle ?
                        this.props.invalidStyle : defaultInvalidStyle}>
                        {this.props.invalidText}
                    </div>
                }
            </div>



    }
};


