import React, { Component } from 'react';
import profile from './assets/profile.jpg'
import './App.css';
import Primary from '../src/components/Primary/Primary';
import Nav from '../src/components/Nav/Nav';
import About from './components/About/About';
import Style from './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-main">
         <Primary profile={profile} name={"Leila Ybañez"} job={"Jr. Front End Dev"} />
          <Nav home={"Home"} about={"About"} contact={"Contact"} />
        </div>
      </div>
    );
  }
}

export default App;
