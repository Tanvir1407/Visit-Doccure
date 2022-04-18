import React from 'react';
import './Login.css';

const Login = () => {
    return (
      <div className="login-container">
        <h2>Login Doccure</h2>
        <form>
          <input type="email" name="email" id="" placeholder="Email" /> <br />
          <input
            type="password"
            name="password"
            id=""
            placeholder="Password"
          />{" "}
          <br />
          <span className="reset-password-link">Forgot password ?</span> <br />
          <input className="submit-btn" type="submit" value="Login" />
        </form>
        <p>
          <span>or</span>
        </p>
        <div className='social-media-btn'>
          <button className="btn-1">
            <i class="fab fa-facebook-f"></i> Login
          </button>
          <button className="btn-2">
            <i class="fab fa-google"></i> Login
          </button>
        </div>
      </div>
    );
};

export default Login;