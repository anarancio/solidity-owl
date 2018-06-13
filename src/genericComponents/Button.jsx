import React, {Component} from "react";


export default class Button extends Component{

    render = () =>
        <button type={this.props.type}
                className={this.props.classList}
                onClick={this.props.handleClick}
        >
            {this.props.btnContent}
        </button>
}
