import React from 'react';
import "./App.css";
import Beranda from "./components/Home";
import CSR from "./pages/Csr";
import Tentang from "./pages/Tentang-kami";
import Kontak from "./pages/kontak";
import Berita from "./pages/berita";
import Login from "./pages/auth/login";
import Regist from "./pages/auth/regist";
import Dashboard from "./pages/dashboard/dashboard";
import PortalBerita from "./pages/dashboard/portal-berita";
import Edit from "./pages/dashboard/edit-berita";  // Sesuaikan dengan path file Edit.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AutoProvider from './pages/auth/AuthContext';

function App() {
  return (
    <>
      <div className='App'>
        <Router>
          <Routes>
            <Route path="/" element={<Beranda />} />
            <Route path="/beranda" element={<Beranda />} />
            <Route path="/csr" element={<CSR />} />
            <Route path="/berita" element={<Berita />} />
            <Route path="/kontak" element={<Kontak />} />
            <Route path="/tentang-kami" element={<Tentang />} />
            <Route path="/login" element={<Login />} />
            <Route path="/regist" element={<Regist />} />
            <Route path="/dashboard" element={<AutoProvider> <Dashboard/> </AutoProvider> } />
            <Route path="/dashboard/portal-berita" element={<PortalBerita />} />
            <Route path="/dashboard/portal-berita/edit-berita/:id" element={<Edit />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
