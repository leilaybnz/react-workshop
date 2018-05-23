import React, { Component } from 'react';
import styles from './styles.css'

const Primary = (props) => {
    return (
        <div className="box">
        <img src={props.profile} className="profile" alt="Profile" />
          <h1 className="name">{props.name}</h1>
          <h2 className="job">{props.job}</h2>
        </div>
    )
}


export default Primary;