import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-main">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Leila Ybañez</h1>
          <h2 className="App-subtitle">Trainee Web Developer</h2>
        </div>
      </div>
    );
  }
}

export default App;
