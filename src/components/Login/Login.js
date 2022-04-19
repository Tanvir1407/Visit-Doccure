import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import './Login.css';

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
   const emailHandler = (e) => {
     setEmail(e.target.value);
   };
   const passwordHandler = (e) => {
     setPassword(e.target.value);
  };
  
  const handleLoginUser = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password)
  }
    return (
      <div className="login-container">
        <h2>Login Doccure</h2>
        <p>{ error?.message}</p>
        <form onSubmit={handleLoginUser}>
          <input
            onBlur={emailHandler}
            className="login-input"
            type="email"
            name="email"
            id="1"
            placeholder="Email"
            required
          />{" "}
          <br />
          <input
            onBlur={passwordHandler}
            className="login-input"
            type="password"
            name="password"
            id="2"
            placeholder="Password"
            required
          />{" "}
          <br />
          <span className="reset-password-link">Forgot password ?</span> <br />
          <input className="submit-btn" type="submit" value="Login" />
        </form>
        <p className="or-option">
          <span>or</span>
        </p>
        <div className="social-media-btn">
          <button className="btn-facebook">
            <i class="fab fa-facebook-f"></i> Login
          </button>
          <button className="btn-google">
            <i class="fab fa-google"></i> Login
          </button>
        </div>
        <p className="register-link">
          Don’t have an account? <Link to="/signup">Register</Link>
        </p>
      </div>
    );
};

export default Login;