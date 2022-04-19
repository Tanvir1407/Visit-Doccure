import React from "react";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import auth from '../../firebase.init';
import './Header.css';

const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth)
  }
  return (
    <div className="header">
      <div >
        <img src={"https://i.ibb.co/brt9rps/logo-1.png"} alt="" />
      </div>
      <div className="header-link">
        <Link to="/">Home</Link>
        <Link to="/checkout">Checkout</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/about">About</Link>
      </div>
      <div>
        {user ? (
          <button onClick={handleSignOut} className="header-btn">Log Out</button>
        ) : (
          <Link className="header-btn" to="/login">
            LOGIN
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
