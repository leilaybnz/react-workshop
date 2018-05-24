import React, { Component } from 'react';
import profile from '../../assets/profile.jpg';

const Primary = (props) => {
    return (
        <div className="box">
        <img src={profile} className="profile" alt="Profile" />
          <h1 className="name">Leila Ybañez</h1>
          <h2 className="job">Jr. Front End Dev</h2>
        </div>
    )
}


export default Primary;