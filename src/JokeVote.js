import React, { Component } from "react";
import "./JokeVote.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";

class JokeVote extends Component {
    render() {
        console.log(this.props.curEmotion[1]);
        return (
            <div className="JokeVote">
                <FontAwesomeIcon
                    icon={faArrowUp}
                    onClick={() => this.props.handleVote("up")}
                />
                <div
                    className={`JokeVote-voteContainer JokeVote-voteContainer-${
                        this.props.curEmotion
                    }`}
                >
                    {this.props.curVote}
                </div>
                <FontAwesomeIcon
                    icon={faArrowDown}
                    onClick={() => this.props.handleVote("down")}
                />
            </div>
        );
    }
}

export default JokeVote;
