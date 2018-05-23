import React, { Component } from 'react';
import profile from './assets/profile.jpg'
import './App.css';
import Primary from '../src/components/Primary/Primary'
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-main">
          <Primary profile={profile} name={"Leila Ybañez"} job={"Trainee Front End Dev"}  />
        </div>
      </div>
    );
  }
}

export default App; 0 
