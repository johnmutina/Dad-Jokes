import React, { Component } from "react";
import FacebookEmoji from "react-facebook-emoji";
import "./JokeIcon.css";

class JokeIcon extends Component {
    render() {
        return (
            <div className="JokeIcon">
                <FacebookEmoji type={this.props.curVote} />
            </div>
        );
    }
}

export default JokeIcon;
