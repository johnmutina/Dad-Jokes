import React, { Component } from "react";
import JokesHeader from "./JokesHeader";
import JokeRow from "./JokeRow";

const API_URL = "https://icanhazdadjoke.com/";

class JokeMachine extends Component {
    render() {
        return (
            <div>
                <h1>Joke Machine</h1>
                <JokesHeader />
                <JokeRow />
            </div>
        );
    }
}

export default JokeMachine;
