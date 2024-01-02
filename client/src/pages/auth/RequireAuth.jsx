import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';

const RequireAuth = ({ children }) => {
    const { user } = useContext(AuthContext) || {}; // Use empty object as default value
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            // Jika pengguna tidak login, arahkan ke halaman login
            navigate('/login');
        }
    }, [user, navigate]);

    return <>{children}</>;
};

export default RequireAuth;
