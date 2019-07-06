import React, { Component } from "react";

class JokeVote extends Component {
    render() {
        return (
            <div>
                <button onClick={() => this.props.handleVote("up")}>UP</button>
                <h5>{this.props.currVote}</h5>
                <button onClick={() => this.props.handleVote("down")}>
                    DOWN
                </button>
            </div>
        );
    }
}

export default JokeVote;
