import React, { Component } from "react";
import FormList from "./formList";

class Form extends Component {
	render() {
		const defaultWidth = {
			width: "750px",
		};
		return (
			<ul className="wrapper-form" style={defaultWidth}>
				{this.props.items.map((listData, i) => {
					return <FormList listData={listData} key={i} />;
				})}
			</ul>
		);
	}
}

export default Form;
