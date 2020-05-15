import React, { Component } from "react";
import Header from "./header";
import Contents from "./contents";
import Footer from "./footer";

class Page extends Component {
    render() {
        return (
            <div className="page">
                {this.onInitHeader()}
                {this.onInitContents()}
                {this.onInitFooter()}
            </div>
        );
    }

    onInitHeader() {
        var _header;
        if (this.props.data.header) {
            _header = <Header headerData={this.props.data.header} />;
        }
        
        return _header;
    }

    onInitContents() {
        var _contents;
        if (this.props.data.contents) {
            _contents = <Contents contentsData={this.props.data.contents} />;
        }
        
        return _contents;
    }

    onInitFooter() {
        var _footer;
        if (this.props.data.footer) {
            _footer = <Footer footerData={this.props.data.footer} />;
        }
        
        return _footer;
    }
}

export default Page;