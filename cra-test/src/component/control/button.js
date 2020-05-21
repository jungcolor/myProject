import React, { Component } from 'react';

class Button extends Component {
    render() {
        const defualtProps = {
            class: "btn btn-primary"
        }
        const data = this.props.controlData.components;

        return <button type="button" id={data.id} className={defualtProps.class}>{data.title}</button>
    }
}

export default Button;