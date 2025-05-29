// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h1 className="logo">College Property System</h1>
      <nav>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/admin-dashboard">Admin</Link></li>
          <li><Link to="/departments">Departments</Link></li>
          <li><Link to="/viewproperties">Properties</Link></li>
          <li><Link to="/contactUs">Contact</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
