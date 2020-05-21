import React, { Component } from "react";
import Input from "../control/input";
import Button from "../control/button";

// Container Component
class FormList extends Component {
    getControl(type) {
        switch(type) {
            case "input":
                type = <Input controlData={this.props.listData} />;
                break;
            case "button":
                type = <Button controlData={this.props.listData} />;
        }
        
        return type;
    }
	render() {
		return (
			<li>
				<div className="title">
                    {this.props.listData.addonTitle}
                </div>
				<div className="form">
                    {this.getControl(this.props.listData.controlType)}
				</div>
			</li>
		);
	}
}

export default FormList;
