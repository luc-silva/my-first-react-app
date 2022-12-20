import React, { Component } from "react";
import App_Header from "./components/App_Header";
import App_Body from "./components/App_Body";




class App extends Component {
    render() {
        return (
            <div>
                <App_Header />
                <App_Body />
            </div>
        );
    }
}

export default App;
