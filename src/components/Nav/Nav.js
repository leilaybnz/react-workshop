import React, { Component } from 'react';
import style from './styles.css';

const Nav = (props) => {
    return (
        <div className="lista">
            <ul>
                <li className="home">{props.home}</li>
                <li className="about">{props.about}</li>
                <li className="contact">{props.contact}</li>            
            </ul>
        </div>
    )
}

export default Nav;