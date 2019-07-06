import React, { Component } from "react";

class JokeText extends Component {
    render() {
        return (
            <div>
                <h5>{this.props.text}</h5>
            </div>
        );
    }
}

export default JokeText;
