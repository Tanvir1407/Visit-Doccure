import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    return (
      <div className="login-container">
        <h2>Login Doccure</h2>
        <form>
          <input
            className="login-input"
            type="email"
            name="email"
            id=""
            placeholder="Email"
          />{" "}
          <br />
          <input
            className="login-input"
            type="password"
            name="password"
            id=""
            placeholder="Password"
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
          Don’t have an account? <Link to='/signup'>Register</Link>
        </p>
      </div>
    );
};

export default Login;