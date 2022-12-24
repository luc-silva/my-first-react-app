import React, { Component } from "react";

class BodySidebar extends Component {
    constructor(props){
        super(props)
    }
    
    render() {
        return (
            <nav>
                <ul>
                    <li onClick={() => {this.props.changeUser()}}>Home</li>
                    <li>Friends</li>
                    <li>Settings</li>
                </ul>
            </nav>
        );
    }
}

export default BodySidebar;
