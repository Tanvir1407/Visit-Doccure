import React from "react";
import { Link } from "react-router-dom";
import './Header.css';

const Header = () => {
 
  return (
    <div className="header">
      <div>
        <img src={"https://i.ibb.co/brt9rps/logo-1.png"} alt="" />
      </div>
      <div className="header-link">
        <Link to="/">Home</Link>
        <Link to="/checkout">Checkout</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/about">About</Link>
      </div>
      <div>
        <Link className="header-btn" to="/login">
          LOGIN
        </Link>
      </div>
    </div>
  );
};

export default Header;
