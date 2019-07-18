import React, { Component } from "react";
import "./JokeVote.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";

class JokeVote extends Component {
    render() {
        return (
            <div className="JokeVote">
                <FontAwesomeIcon
                    className="JokeVote-arrow"
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
                    className="JokeVote-arrow"
                    icon={faArrowDown}
                    onClick={() => this.props.handleVote("down")}
                />
            </div>
        );
    }
}

export default JokeVote;
