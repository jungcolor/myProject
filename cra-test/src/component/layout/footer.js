import React, { Component } from "react";
import Button from "../control/button";

// Container Component
class Footer extends Component {
	render() {
		return (
            <div className="footer">
                <div className="wrapper-toolbar">
                    <div className="pull-left">
                        {this.props.footerData.items.map((items, i) => {
                            return <Button controlData={items} key={i} />
                        })}
                    </div>
                </div>
            </div>
        );
	}
}

export default Footer;
