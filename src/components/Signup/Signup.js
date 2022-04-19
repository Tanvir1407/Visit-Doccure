import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const emailHandler = (e) => {
        setEmail(e.target.value)
    }
    const passwordHandler = (e) => {
        setPassword(e.target.value)
    }
    const confirmPasswordHandler = (e) => {
        setConfirmPassword(e.target.value)
    }
  return (
    <div className="login-container">
      <h2>Sign Up Doccure</h2>
      <form>
        <input
          onBlur={emailHandler}
          className="login-input"
          type="email"
          name="email"
          id=""
          placeholder="Email"
        />{" "}
        <br />
        <input
          onBlur={passwordHandler}
          className="login-input"
          type="password"
          name="password"
          id=""
          placeholder="Password"
        />{" "}
        <br />
        <input
          onBlur={confirmPasswordHandler}
          className="login-input"
          type="password"
          name="confirm-password"
          id=""
          placeholder="Confirm Password"
        />{" "}
        <br />
        <input className="submit-btn" type="submit" value="Sign Up" />
      </form>
      <p className="or-option">
        <span>or</span>
      </p>
      <p className="register-link">
        Already you have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default Signup;
