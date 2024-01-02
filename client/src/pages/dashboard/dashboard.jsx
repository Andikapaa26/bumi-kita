import Sidebar from '../../layout/Sidebar/Sidebar';
import Content from '../../layout/Content/Content';
import './Content.css';
import React from "react";
import AuthProvider from '../auth/AuthContext';

const dashboard = () => {
  return (
    <>
      <AuthProvider>
        <div className='app'>
          <Sidebar />
          <Content />
        </div>
        </AuthProvider>
    </>
  )

};


export default dashboard;
