import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  //constructor to init default state -Jina
  constructor(props) {
      super(props);
      this.state = { apiResponse: "" };
  }

  //insert callAPI() method that fetches data from API and store the response on this.state.apiResponse
  callAPI() {
      fetch("http://localhost:9000/testAPI")
          .then(res => res.text())
          .then(res => this.setState({ apiResponse: res }));
  }

  //insert react lifecycle method that will execute callAPI() after the component mounts
  componentWillMount() {
      this.callAPI();
  }

  render() {
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              {this.state.apiResponse}
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      );
    }

}
  

export default App;
