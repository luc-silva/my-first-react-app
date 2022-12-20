import React, { Component } from "react";
import AppHeader from "./components/App_Header";
import AppBody from "./components/App_Body";
import AppFooter from "./components/App_Footer";

class App extends Component {
    render() {
        return (
            <div id="app">
                <AppHeader />
                <AppBody />
                <AppFooter />
            </div>
        );
    }
}

export default App;
