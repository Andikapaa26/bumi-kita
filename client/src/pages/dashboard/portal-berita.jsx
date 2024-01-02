import React from 'react';
import Sidebar from '../../layout/Sidebar/Sidebar';
import Berita from './berita';
import AuthProvider from '../auth/AuthContext';

const portalberita = () => {
    return (
        <AuthProvider>

        <div className='app'>
            <Sidebar />
            <Berita/>
        </div>
        </AuthProvider>
    );
};

export default portalberita;