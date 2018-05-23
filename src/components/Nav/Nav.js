import React, { Component } from 'react';
import Style from './styles.css';
import About from '../About/About'; 
import { BrowserRouter as Link } from 'react-router-dom';

const Nav = (props) => {
    return (
        <div className="lista">
            <ul>
                <Link to="/"><li className="home">{props.home}</li></Link>
               <Link to="/about"><li className="about">About</li></Link>
                <Link to="/contact"><li className="contact">{props.contact}</li></Link>            
            </ul>
        </div>
    )
}

export default Nav;