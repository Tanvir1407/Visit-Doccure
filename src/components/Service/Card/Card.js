import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

const Card = (props) => {
    const {name,picture,balance,about } = props.service
    return (
      <div className="card">
        <img src={picture} alt="" />
        <div className="card-text">
          <h3>{name}</h3>
          <span className="price">Fee: {balance}</span> <br />
          <p>{about}</p>
          <Link to='/checkout'>
            <button className="appoinment">Appoinment</button>
          </Link>
        </div>
      </div>
    );
};

export default Card;