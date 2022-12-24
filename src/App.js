import React, { Component } from "react";
import AppHeader from "./components/App_Header";
import AppBody from "./components/App_Body";
import AppFooter from "./components/App_Footer";

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: "Lucas",
        };
    }
    changeUser() {
        this.setState({ user: "Marcola" });
    }

    render() {
        return (
            <div id="app">
                <AppHeader user={this.state.user} />
                <AppBody user={this.state.user} changeUser={this.changeUser.bind(this)} />
                <AppFooter />
            </div>
        );
    }
}

export default App;
