import React, { useState } from "react";
import { Link, useNavigate,useLocation} from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import "./Signup.css";
import auth from '../../firebase.init';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

  
    const [createUserWithEmailAndPassword, user] =
      useCreateUserWithEmailAndPassword(auth);

    const emailHandler = (e) => {
        setEmail(e.target.value)
    }
    const passwordHandler = (e) => {
        setPassword(e.target.value)
    }
    const confirmPasswordHandler = (e) => {
        setConfirmPassword(e.target.value)
  }


  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || '/';
  if (user) {
    navigate (from, {replace:true})
  }
  
  const handleCreateUser = e => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Your Confirm Password did Not Match")
      return;
    }
    if (password.length  < 6) {
      setError("Password must be 6 Characters or longer")
      return;
    }
    setError('');
    createUserWithEmailAndPassword(email, password)

  }


  return (
    <div className="login-container">
      <h2>Sign Up Doccure</h2>
      <form onSubmit={handleCreateUser}>
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
        />
        <br />
        <p className="error-text">{ error}</p>
        <input
          onBlur={confirmPasswordHandler}
          className="login-input"
          type="password"
          name="confirm-password"
          id="3"
          placeholder="Confirm Password"
          required
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
