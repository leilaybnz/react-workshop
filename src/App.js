import React, { Component } from 'react';
import profile from './assets/profile.jpg'
import './App.css';
import Primary from '../src/components/Primary/Primary';
import Nav from '../src/components/Nav/Nav';
import { BrowserRoute, Router, Route } from 'react-router-dom';
import About from './components/About/About';


class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <div className="App-main">
         
          <Nav home={"Home"} about={"About"} contact={"Contact"} />
        </div>
        <Route exact path="/" component={About}/>
      </div>
      </Router>
    );
  }
}

export default App;
