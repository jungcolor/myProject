import React, { Component } from "react";
import Form from "./form";

// Container Component
class Contents extends Component {
    getType(type, items) {
		switch (type) {
			case "form":
				type = <Form items={items} />;
				break;
			default:
				break;
		}

		return type;
    }

	render() {
		const type = this.props.contentsData.items.type;
		const items = this.props.contentsData.items.items;

		return <div className="contents">{this.getType(type, items)}</div>;
	}
}

export default Contents;
