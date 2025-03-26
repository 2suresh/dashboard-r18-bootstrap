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
      <div className='sidebar-logo-container'>
        <div className='sidebar-logo'>
          <FaTachometerAlt className='logo-icon' />
          {isOpen && <span className='logo-text'>LOGO</span>}
        </div>
      </div>

      {/* Sidebar Menu */}
      <nav className='sidebar-nav'>
        {/* Master Data with Dropdown */}
        <div className={`menu-item ${openMenu === 'master' ? 'open' : ''}`}>
          <div
            className='menu-link'
            onClick={() => handleMenuToggle('master')}
          >
            <div className='menu-icon-wrapper'>
              <FaCogs className='menu-icon' />
              {isOpen && <div className='menu-name'>Master Data</div>}
            </div>
            {isOpen &&
              (openMenu === 'master' ? <FaChevronUp /> : <FaChevronDown />)}
          </div>
          {openMenu === 'master' && (
            <div className='submenu'>
              <Link
                to='/diagnostic'
                className={`submenu-item ${
                  isActive('/diagnostic') ? 'active' : ''
                }`}
              >
                <FaNotesMedical className='submenu-icon' />
                Diagnostic Master
              </Link>

              <Link
                to='/category'
                className={`submenu-item ${
                  isActive('/category') ? 'active' : ''
                }`}
              >
                <FaFileInvoice className='submenu-icon' />
                Category Master
              </Link>

              <Link
                to='/subcategory'
                className={`submenu-item ${
                  isActive('/subcategory') ? 'active' : ''
                }`}
              >
                <FaFileInvoice className='submenu-icon' />
                Subcategory Master
              </Link>

              <Link
                to='/pricing'
                className={`submenu-item ${
                  isActive('/pricing') ? 'active' : ''
                }`}
              >
                <FaFileInvoice className='submenu-icon' />
                Pricing Master
              </Link>
            </div>
          )}
        </div>

        {/* User Management */}
        <div className='menu-item'>
          <Link
            to='/user-management'
            className={`menu-link ${
              isActive('/user-management') ? 'active' : ''
            }`}
          >
            <div className='menu-icon-wrapper'>
              <FaUserCog className='menu-icon' />
              {isOpen && <div className='menu-name'>User Management</div>}
            </div>
          </Link>
        </div>

        {/* Patient */}
        <div className='menu-item'>
          <Link
            to='/patient'
            className={`menu-link ${isActive('/patient') ? 'active' : ''}`}
          >
            <div className='menu-icon-wrapper'>
              <FaUsers className='menu-icon' />
              {isOpen && <div className='menu-name'>Patient</div>}
            </div>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
