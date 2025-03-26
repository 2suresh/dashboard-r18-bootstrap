import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  FaTachometerAlt,
  FaChevronDown,
  FaChevronUp,
  FaUserCog,
  FaNotesMedical,
  FaCogs,
  FaUser,
  FaFileInvoice,
  FaUsers,
} from 'react-icons/fa';
import './Sidebar.css';

import Logo from '../assets/BloodCollection.png';

const Sidebar = ({ isOpen }) => {
  const [openMenu, setOpenMenu] = useState(null);
  const location = useLocation();

  const handleMenuToggle = (menu) => {
    setOpenMenu((prev) => (prev === menu ? null : menu));
  };

  // Check if menu item is active
  const isActive = (path) => location.pathname === path;

  return (
    <div className={`sidebar ${isOpen ? 'open' : 'collapsed'}`}>
      {/* Logo Section */}
      <div className="sidebar-logo-container">
        <div className="sidebar-logo">
          <img src={Logo} alt="logo" />
        </div>
      </div>

      {/* Sidebar Menu */}
      <nav className="sidebar-nav">
        {/* Master Data with Dropdown */}
        <div className={`menu-item ${openMenu === 'master' ? 'open' : ''}`}>
          <div
            className="menu-link d-flex align-items-center"
            onClick={() => handleMenuToggle('master')}
          >
            <div className="menu-icon-wrapper d-flex align-items-center gap-2">
              <FaCogs className="menu-icon" />
              {isOpen && <div className="menu-name">Master Data</div>}
            </div>
            {isOpen &&
              (openMenu === 'master' ? <FaChevronUp /> : <FaChevronDown />)}
          </div>

          {openMenu === 'master' && (
            <div className="submenu">
              <Link
                to="/diagnostic"
                className={`submenu-item border-bottom d-flex flex-column align-items-center ${
                  isActive('/diagnostic') ? 'active' : ''
                }`}
              >
                <FaNotesMedical className="submenu-icon mb-1" />
                <div className="submenu-text">Diagnostic Master</div>
              </Link>

              <Link
                to="/category"
                className={`submenu-item border-bottom d-flex flex-column align-items-center ${
                  isActive('/category') ? 'active' : ''
                }`}
              >
                <FaFileInvoice className="submenu-icon mb-1" />
                <div className="submenu-text">Category Master</div>
              </Link>

              <Link
                to="/subcategory"
                className={`submenu-item border-bottom d-flex flex-column align-items-center ${
                  isActive('/subcategory') ? 'active' : ''
                }`}
              >
                <FaFileInvoice className="submenu-icon mb-1" />
                <div className="submenu-text">Subcategory Master</div>
              </Link>

              <Link
                to="/pricing"
                className={`submenu-item border-bottom d-flex flex-column align-items-center ${
                  isActive('/pricing') ? 'active' : ''
                }`}
              >
                <FaFileInvoice className="submenu-icon mb-1" />
                <div className="submenu-text">Pricing Master</div>
              </Link>
            </div>
          )}
        </div>

        {/* User Management (No Submenu) */}
        <div className="menu-item">
          <Link
            to="/user-management"
            className={`menu-link d-flex flex-column align-items-center ${
              isActive('/user-management') ? 'active' : ''
            }`}
          >
            <FaUserCog className="menu-icon mb-1" style={{ marginRight: 0 }} />
            <div className="menu-name">User Management</div>
          </Link>
        </div>

        {/* Patient (No Submenu) */}
        <div className="menu-item">
          <Link
            to="/patient"
            className={`menu-link d-flex flex-column align-items-center ${
              isActive('/patient') ? 'active' : ''
            }`}
          >
            <FaUsers className="menu-icon mb-1" style={{ marginRight: 0 }} />
            <div className="menu-name">Patient</div>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
