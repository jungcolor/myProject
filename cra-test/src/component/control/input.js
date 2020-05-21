import React, { Component } from "react";

// Presentation Component
class Input extends Component {
    controlType(type) {
        switch(type) {
            case "BASIC":
                type = "text";
                break;
            case "PASSWORD":
                type = "password";
                break;
            default:
                break;
        }

        return type;
    }
	render() {
        const defaultClass = "form-control";
        const data = this.props.controlData.components;

		return <input type={this.controlType(data.type)} id={data.id} title={data.title} placeholder={data.placeholder} className={defaultClass} />;
	}
}

export default Input;
