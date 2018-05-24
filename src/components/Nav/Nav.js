import React, { Component } from 'react';
import About from '../About/About'; 
const Nav = (props) => {
    return (
        <div className="lista">
            <ul>
                <li className="home">{props.home}</li>
               <li className="about">About</li>
                <li className="contact">{props.contact}</li>          
            </ul>
        </div>
    )
}

export default Nav;