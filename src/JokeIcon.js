import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

// TODO: find the right icons for the 5 emotions
// TODO: puth them in the defaultProps
// TODO: create logic to select icon based on the currVote

class JokeIcon extends Component {
    render() {
        return (
            <div>
                <h4>Icon</h4>
                <FontAwesomeIcon icon={faCoffee} />
            </div>
        );
    }
}

export default JokeIcon;
