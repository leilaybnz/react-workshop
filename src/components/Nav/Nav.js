import React, { Component } from 'react';
import About from '../About/About'; 
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div className="lista">
            <ul>
                <Link to='/'><li className="home">Home</li></Link>
                <Link to='/about'><li className="about">About</li></Link>
                <Link to='/contact'><li className="contact">Contact</li></Link>          
            </ul>
        </div>
    )
}

export default Nav;