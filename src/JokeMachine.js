import React, { Component } from "react";
import JokeRow from "./JokeRow";
import Axios from "axios";
import Loader from "react-loader-spinner";
import uuid from "uuid";
import "./JokeMachine.css";

const API_URL = "https://icanhazdadjoke.com/";

class JokeMachine extends Component {
    static defaultProps = {
        numJokesToGet: 10
    };
    constructor(props) {
        super(props);
        this.state = {
            jokesObj: JSON.parse(window.localStorage.getItem("jokes") || "[]"),
            isLoading: false
        };
        this.seenJokes = new Set(this.state.jokesObj.map(j => j.joke));
        this.fetchJokes = this.fetchJokes.bind(this);
    }

    async componentDidMount() {
        if (this.state.jokesObj.length === 0) {
            this.fetchJokes();
        }
    }

    async fetchJokes() {
        try {
            this.setState({ isLoading: true });
            let jokes = [];
            while (jokes.length < this.props.numJokesToGet) {
                let response = await Axios.get(API_URL, {
                    headers: { Accept: "application/json" }
                });
                let newJoke = response.data;
                if (!this.seenJokes.has(newJoke.joke)) {
                    jokes.push(response.data);
                }
            }
            this.setState({
                jokesObj: [...this.state.jokesObj, ...jokes],
                isLoading: false
            });
            window.localStorage.setItem("jokes", JSON.stringify(jokes));
        } catch (e) {
            alert(e);
            this.setState({ isLoading: false });
        }
    }

    render() {
        return (
            <div className="JokeMachine">
                <div className="JokeMachine-sidebar">
                    <h1 className="JokeMachine-title">
                        <span>Dad</span> Jokes
                    </h1>
                    <img
                        alt="laughing icon"
                        src="https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg"
                    />
                    <button
                        className="JokeMachine-getmore"
                        onClick={this.fetchJokes}
                    >
                        Fetch Jokes
                    </button>
                </div>
                <div className="JokeMachine-jokes">
                    {this.state.isLoading ? (
                        <div className="JokeMachine-loaderBox">
                            <Loader
                                type="Puff"
                                color="#9575CD"
                                height="130"
                                width="130"
                            />
                        </div>
                    ) : (
                        this.state.jokesObj.map(joke => (
                            <JokeRow key={uuid()} data={joke} />
                        ))
                    )}
                </div>
            </div>
        );
    }
}

export default JokeMachine;
