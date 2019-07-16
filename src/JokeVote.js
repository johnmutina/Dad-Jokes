import React, { Component } from "react";
import "./JokeVote.css";

class JokeVote extends Component {
    render() {
        let borderColorClass = "JokeVote-voteContainer-";
        if (this.props.currVote < -5) {
            borderColorClass += "sad";
        } else if (this.props.currVote < 0) {
            borderColorClass += "angry";
        } else if (this.props.currVote === 0) {
            borderColorClass += "ok";
        } else if (this.props.currVote > 5) {
            borderColorClass += "laugh";
        } else {
            borderColorClass += "wow";
        }

        return (
            <div>
                <button onClick={() => this.props.handleVote("up")}>UP</button>
                <div className={`JokeVote-voteContainer ${borderColorClass}`}>
                    <h5>{this.props.currVote}</h5>
                </div>
                <button onClick={() => this.props.handleVote("down")}>
                    DOWN
                </button>
            </div>
        );
    }
}

export default JokeVote;
