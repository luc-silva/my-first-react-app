import React, { Component } from "react";
import AppAccountPanel from "./App_Account_Panel";

class AppHeader extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <header>
                <h1>Hi, this is a test!</h1>
                <AppAccountPanel user={this.props.user} />
            </header>
        );
    }
}

export default AppHeader;
