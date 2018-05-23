import React, {Component} from 'react';

const Primary = (props) => {
    return (
        <div>
        <img src={props.profile} className="profile" alt="Profile" />
          <h1 className="name">{props.name}</h1>
          <h2 className="job">{props.job}</h2>
        </div>
    )
}


export default Primary;