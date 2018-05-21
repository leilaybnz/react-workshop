import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-main">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">About</h1>
        </div>
      </div>
    );
  }
}

export default App;
