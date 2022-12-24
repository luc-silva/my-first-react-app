import React, { Component } from "react";
import FeedCard from "./Feed_card";

class BodyFeed extends Component {
    constructor(props){
        super(props)
    }
    render() {
        let posts = this.props.user.posts
        return <div className="app-feed">
            {posts.map((post, index) => <FeedCard key={index} user={this.props.user.user} title={post.title} description={post.description}/>)}
        </div>;
    }
}

export default BodyFeed;
