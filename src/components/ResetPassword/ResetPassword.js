import { sendPasswordResetEmail } from 'firebase/auth';
import React, { useState } from 'react';
import auth from '../../firebase.init';
import './ResetPassword.css';


const ResetPassword = () => {
    const [email, setEmail] = useState("");
    const handleEmail = (e) => { 
        setEmail(e.target.value)
    };
    
    const handleResetPassword = (e) => {
        e.preventDefault();
        sendPasswordResetEmail(auth, email)
            .then(() => { });
        
        if (email) {
            window.alert("Check Your Email");
        }
        else {
            window.alert('Please Enter Your Email')
        }
    };
    
    return (
      <div className="reset-box">
        <form>
          <input onBlur={handleEmail} type="email" name="" id="email-filed" placeholder="Enter Your Email" />{" "}
          <br />
          <input
            onClick={handleResetPassword}
            className="reset-btn"
            type="submit"
            value="Reset"
          />
        </form>
      </div>
    );
};

export default ResetPassword;