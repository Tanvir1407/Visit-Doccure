import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import './RequareAuth.css';

const RequareAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    if (loading) {
        return (
          <div className='spinner'>
            <div class="loader"></div>
          </div>
        );
     }
    else if (!user) {
        return <Navigate to='/login' state={{from:location}} replace></Navigate>
    }
    return children;
};

export default RequareAuth;