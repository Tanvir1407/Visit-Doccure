import React from 'react';
import { Link } from 'react-router-dom';
import './Error.css';

const Error = () => {
    return (
      <div>
        <div className="error-icon">
          <i class="fas fa-sad-cry"></i>
        </div>
        <h1 className='error-heading'>This Page Not Found</h1>
        <button className="go-home-btn">
          <Link to="/">Go Home</Link>
        </button>
      </div>
    );
};

export default Error;