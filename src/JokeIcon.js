import React, { Component } from "react";
import FacebookEmoji from "react-facebook-emoji";

class JokeIcon extends Component {
    static defaultProps = {
        emojis: {
            sad: "sad",
            angry: "angry",
            ok: "yay",
            wow: "wow",
            laugh: "haha"
        }
    };

    render() {
        // TODO: find a way to refactor this below code which is also used in JokeVote.js. Maybe it should be passed to parent and then values passed down as props.

        let curEmoji = "ok";

        if (this.props.currVote < -5) {
            curEmoji = "sad";
        } else if (this.props.currVote < 0) {
            curEmoji = "angry";
        } else if (this.props.currVote === 0) {
            curEmoji = "ok";
        } else if (this.props.currVote > 5) {
            curEmoji = "laugh";
        } else {
            curEmoji = "wow";
        }

        return (
            <div>
                <h4>Icon</h4>
                <FacebookEmoji type={this.props.emojis[curEmoji]} />
            </div>
        );
    }
}

export default JokeIcon;
