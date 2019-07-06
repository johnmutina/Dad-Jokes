import React, { Component } from "react";
import JokesHeader from "./JokesHeader";
import JokeRow from "./JokeRow";
import Axios from "axios";

const API_URL = "https://icanhazdadjoke.com/";

class JokeMachine extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jokesObj: []
        };
        this.fetchJokes = this.fetchJokes.bind(this);
    }

    async componentDidMount() {
        this.fetchJokes();
    }

    async fetchJokes() {
        let jokes = [];
        for (let i = 0; i < 10; i++) {
            let response = await Axios.get(API_URL, {
                headers: { Accept: "application/json" }
            });
            jokes.push(response.data);
        }
        this.setState({
            jokesObj: [...this.state.jokesObj, ...jokes]
        });
    }

    render() {
        return (
            <div>
                <JokesHeader fetchJokes={this.fetchJokes} />
                {this.state.jokesObj.map(joke => (
                    <JokeRow key={joke.id} data={joke} />
                ))}
            </div>
        );
    }
}

export default JokeMachine;
