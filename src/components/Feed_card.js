import React, { Component } from "react";

class FeedCard extends Component {
    constructor(props) {
        super();
        this.description = props.description;
        this.state = {
            title: props.title,
        };
    }
    showText() {
        setTimeout(() => {
            this.setState({
                title: (this.state.title = "ouch"),
            });
        }, 3000);
    }
    render() {
        return (
            <div
                className="feed-card"
                onClick={() => {
                    this.showText();
                }}
            >
                <h2>{this.state.title}</h2>
                <em>{this.props.user}</em>
                <p>{this.description}</p>
            </div>
        );
    }
}

export default FeedCard;
