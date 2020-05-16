import React, { Component } from "react";

class Footer extends Component {
	render() {
		const title = this.props.footerData.title;

		return <div className="footer">{title}</div>;
	}
}

export default Footer;
