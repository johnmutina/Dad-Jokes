import React, { Component } from "react";
import JokeVote from "./JokeVote";
import JokeText from "./JokeText";
import JokeIcon from "./JokeIcon";

class JokeRow extends Component {
    render() {
        return (
            <div>
                <JokeVote />
                <JokeText text={this.props.data.joke} />
                <JokeIcon />
            </div>
        );
    }
}

export default JokeRow;
