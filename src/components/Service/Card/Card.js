import React from 'react';
import './Card.css';

const Card = (props) => {
    const {name,picture,balance,about } = props.service
    return (
      <div className="card">
        <img src={picture} alt="" />
        <div className='card-text'>
          <h3>{name}</h3>
          <span className='price'>Fee: {balance}</span> <br />
          <p>{about}</p>
          <button>Appoinment</button>
        </div>
      </div>
    );
};

export default Card;