import React, { Component } from "react";

class AppAccountPanel extends Component {
    constructor(props) {
        super(props);
    }
    login() {
        alert("hi");
    }
    render() {
        return (
            <div className="account-panel">
                <div className="profile-pic"></div>
                <div className="user-info">
                    <strong>Welcome</strong>
                    <p>
                        {this.props.user || (
                            <button
                                onClick={() => {
                                    this.login();
                                }}
                            >
                                Login
                            </button>
                        )}
                    </p>
                </div>
            </div>
        );
    }
}

export default AppAccountPanel;
