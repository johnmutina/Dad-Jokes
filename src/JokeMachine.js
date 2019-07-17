import React, { Component } from "react";
import JokeRow from "./JokeRow";
import Axios from "axios";
import "./JokeMachine.css";

const API_URL = "https://icanhazdadjoke.com/";

class JokeMachine extends Component {
    static defaultProps = {
        numJokesToGet: 10
    };
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
        while (jokes.length < this.props.numJokesToGet) {
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
            <div className="JokeMachine">
                <div className="JokeMachine-sidebar">
                    <h1 className="JokeMachine-title">
                        <span>Dad</span> Jokes
                    </h1>
                    <img src="https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg" />
                    <button
                        className="JokeMachine-getmore"
                        onClick={this.fetchJokes}
                    >
                        New jokes
                    </button>
                </div>
                <div className="JokeMachine-jokes">
                    {this.state.jokesObj.map(joke => (
                        <JokeRow key={joke.id} data={joke} />
                    ))}
                </div>
            </div>
        );
    }
}

export default JokeMachine;
