import React, { Component } from "react";

class FeedCard extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className="feed-card">
                <h2>{this.props.title}</h2>
                <p>{this.props.description}</p>
            </div>
        )
    }
}

export default FeedCard
