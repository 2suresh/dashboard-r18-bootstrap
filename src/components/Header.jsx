import React from 'react';
import { Dropdown, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header = ({ toggleSidebar }) => {
  return (
    <header className="bg-light d-flex justify-content-between align-items-center shadow">
      {/* Left: Sidebar Toggle */}
      <button
        onClick={toggleSidebar}
        className="btn btn-outline-info toggle-btn"
        style={{
          border: 0,
          fontSize: '25px',
        }}
      >
        <FontAwesomeIcon icon={faBars} />
      </button>

      {/* Center: Page Title */}
      <h2 className="page-title m-0">Blood Collection - Admin</h2>

      {/* Right: Profile Image with Dropdown */}
      <Dropdown align="end">
        <Dropdown.Toggle
          variant="light"
          id="dropdown-basic"
          className="d-flex align-items-center border-0"
        >
          <Image
            src="https://i.pravatar.cc/50" // Replace with actual client image URL
            alt="Client Avatar"
            roundedCircle
            width={40}
            height={40}
            className="me-2"
          />
          <span className="fw-bold">Suresh Kumar</span>
        </Dropdown.Toggle>

        <Dropdown.Menu className="dropdown-menu-custom">
          <Dropdown.Item href="#/profile">Profile</Dropdown.Item>
          <Dropdown.Item href="#/settings">Settings</Dropdown.Item>
          <Dropdown.Item href="#/logout">Logout</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </header>
  );
};

export default Header;
