import React, { Component } from "react";
import BodyFeed from "./Body_Feed";
import BodySidebar from "./Body_Sidebar";

class AppBody extends Component {
    render() {
        return (
            <div className="app-body">
                <BodySidebar />
                <BodyFeed />
            </div>
        );
    }
}

export default AppBody;
