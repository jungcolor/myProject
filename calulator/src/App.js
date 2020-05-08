import React, { Component } from "react";
import Store from "./components/Store"
import Result from "./components/Result";
import OperatorButtons from "./components/OperatorButtons";
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Result></Result>
                <OperatorButtons></OperatorButtons>
                <Store></Store>
            </div>
        );
    }
}

export default App;