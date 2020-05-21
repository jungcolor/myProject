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
                            addonTitle: "아이디",
                            controlType: "input",
                            components: {
                                placeholder: "입력하세요",
                                type: "BASIC",
                                title: "아이디",
                                id: "id"
                            }
                        },
                        {
                            addonTitle: "비밀번호",
                            controlType: "input",
                            components: {
                                placeholder: "입력하세요",
                                type: "PASSWORD",
                                title: "비밀번호",
                                id: "password"
                            }
                        },
                    ]
                }
            },

            footer: {
                title: "footer",
                items: [
                    {
                        addonTitle: "저장",
                        controlType: "button",
                        components: {
                            title: "저장",
                            id: "save"
                        }
                    },
                ]
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