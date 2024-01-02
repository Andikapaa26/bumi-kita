import React, { useEffect, useState } from 'react';
import { personsImgs } from '../../utils/images';
import { navigationLinks } from '../../data/data';
import { SidebarContext } from '../../context/sidebarContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Sidebar.css";
import { useAuth } from '../../pages/auth/AuthContext';

const Sidebar = () => {
  const [activeLinkIdx] = useState(1);
  const [sidebarClass, setSidebarClass] = useState("");
  const { isSidebarOpen } = useContext(SidebarContext);
  const { logout } = useAuth();

    const handleLogout = () => {
        logout();
        useNavigate = ('/login');// Redirect atau navigasi ke halaman login jika diperlukan
    };


  useEffect(() => {
    if (isSidebarOpen) {
      setSidebarClass('sidebar-change');
    } else {
      setSidebarClass('');
    }
  }, [isSidebarOpen]);


  return (
    <div className={`sidebar ${sidebarClass}`}>
      <div className="user-info">
        <div className="info-img img-fit-cover">
          <img src={personsImgs.person_two} alt="profile image" />
        </div>
        <span className="info-name">Bening Aulia</span>
      </div>

      <nav className="navigation">
        <ul className="nav-list text-white">
          {navigationLinks.map((navigationLink) => (
            <li className="nav-item" key={navigationLink.id}>
              <a href={navigationLink.link} className={`nav-link ${navigationLink.id === activeLinkIdx ? 'active' : null}`}>
                <img src={navigationLink.image} className="nav-link-icon" alt={navigationLink.title} />
                <span className="nav-link-text">{navigationLink.title}</span>
              </a>
            </li>
          ))}
          <button className='btn-primary items-center w-full' onClick={handleLogout}>Logout</button>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
