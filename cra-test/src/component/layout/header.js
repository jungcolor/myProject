import React, { Component } from "react";

class Header extends Component {
	render() {
		const title = this.props.headerData.title;

		return <div className="header">{title}</div>;
	}
}

export default Header;
