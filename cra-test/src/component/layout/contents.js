import React, { Component } from 'react';
import Form from "./form";

class Contents extends Component {
    render() {
        const type = this.props.contentsData.items.type;
        const items = this.props.contentsData.items.items;

        return (
            <div className="contents">
                {this.getType(type, items)}
            </div>
        );
    }

    getType(type, items) {
        var _childType;
        
        switch(type) {
            case "form":
                _childType = <Form items={items} />;
                break;
            default:
                break;
        }

        return _childType;
    }
}

export default Contents;