import React, { Component } from "react";
import JokeVote from "./JokeVote";
import JokeText from "./JokeText";
import JokeIcon from "./JokeIcon";
import "./JokeRow.css";

class JokeRow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jokeVote: 0,
            status: {
                sad: "sad",
                angry: "angry",
                ok: "yay",
                wow: "wow",
                laugh: "haha"
            }
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
        let curEmotion;

        if (this.state.jokeVote < -5) {
            curEmotion = this.state.status["angry"];
        } else if (this.state.jokeVote < 0) {
            curEmotion = this.state.status["sad"];
        } else if (this.state.jokeVote === 0) {
            curEmotion = this.state.status["ok"];
        } else if (this.state.jokeVote > 5) {
            curEmotion = this.state.status["laugh"];
        } else {
            curEmotion = this.state.status["wow"];
        }

        return (
            <div className="JokeRow">
                <JokeVote
                    className="JokeRow-buttons"
                    curVote={this.state.jokeVote}
                    curEmotion={curEmotion}
                    handleVote={this.handleVote}
                />
                <JokeText
                    className="JokeRow-text"
                    text={this.props.data.joke}
                />
                <JokeIcon curVote={curEmotion} />
            </div>
        );
    }
}

export default JokeRow;
