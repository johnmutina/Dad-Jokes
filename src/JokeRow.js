import React, { Component } from "react";
import JokeVote from "./JokeVote";
import JokeText from "./JokeText";
import JokeIcon from "./JokeIcon";

class JokeRow extends Component {
    render() {
        return (
            <div>
                <h4>Row</h4>
                <JokeVote />
                <JokeText />
                <JokeIcon />
            </div>
        );
    }
}

export default JokeRow;
