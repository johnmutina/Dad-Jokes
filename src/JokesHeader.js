import React, { Component } from "react";

class JokesHeader extends Component {
    render() {
        return (
            <div>
                <h3>Dad-Jokes-O-Matic</h3>
                <button onClick={this.props.fetchJokes}>Get more jokes</button>
            </div>
        );
    }
}

export default JokesHeader;
