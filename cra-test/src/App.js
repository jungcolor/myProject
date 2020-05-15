import React, { Component } from "react";
import Page from "./component/layout/page";
import './App.css';


class App extends Component {
    render() {
        this.state = {
            header: {
                title: "header"
            },

            contents: {
                items: {
                    type: "form",
                    items: [
                        {
                            id: "input",
                            type: "BASIC",
                            title: "테스트1",
                            components: {
                                tagName: "input",
                                placeholder: "입력하세요",
                            }
                        },
                    ]
                }
            },

            footer: {
                title: "footer"
            }
        }

        return (
            <div className="App">
                <Page data={this.state} />
            </div>
        );
    }
}

export default App;