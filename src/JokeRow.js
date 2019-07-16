import React, { Component } from "react";
import JokeVote from "./JokeVote";
import JokeText from "./JokeText";
import JokeIcon from "./JokeIcon";

class JokeRow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jokeVote: 0
        };
        this.handleVote = this.handleVote.bind(this);
    }

    handleVote(vote) {
        let newVote = this.state.jokeVote;
        if (vote === "up") {
            newVote++;
        } else {
            newVote--;
        }
        this.setState({
            jokeVote: newVote
        });
    }

    render() {
        return (
            <div>
                <JokeVote
                    currVote={this.state.jokeVote}
                    handleVote={this.handleVote}
                />
                <JokeText text={this.props.data.joke} />
                <JokeIcon currVote={this.state.jokeVote} />
            </div>
        );
    }
}

export default JokeRow;
