import React, { Component } from "react";
import Input from "../control/input";

class FormList extends Component {
	render() {
		return (
			<li>
				<div className="title"></div>
				<div className="form">
					<Input controlData={this.props.listData} />
				</div>
			</li>
		);
	}
}

export default FormList;
