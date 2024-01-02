import React, { createContext, useContext, useState } from 'react';
import Axios from 'axios';  // Import Axios if not already imported
import { useNavigate } from 'react-router';

export const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = async (username, password) => {
        try {
            const response = await Axios.post('http://localhost:3002/login', {
                LoginUserName: username,
                LoginPassword: password,
            });

            if (!response.data.message) {
                setUser(response.data.user);
            } else {
                throw new Error('User tidak ditemukan');
            }
        } catch (error) {
            throw new Error('Gagal login');
        }
    };

    const logout = () => {
        setUser(null);
        useNavigate = ('/login');
    };


    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
