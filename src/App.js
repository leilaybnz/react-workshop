import React, { Component } from 'react';
import profile from './assets/profile.jpg'
import './App.css';
import Primary from '../src/components/Primary/Primary';
import Nav from '../src/components/Nav/Nav';
import About from './components/About/About';
import Style from './App.css';
import { Router, Route, Switch } from "react-router-dom";
import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <Router history={history}>
      <div className="App">
        <div className="App-main">
          <Nav home={"Home"} about={"About"} contact={"Contact"} />
          <Switch>
            <Route path="/about" component={About} />
          </Switch>
        </div>
      </div>
      </Router>
    );
  }
}

export default App;
