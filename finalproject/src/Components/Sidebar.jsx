// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png'; // Adjust the path as necessary
import '../styles/Sidebar.css'; // Adjust the path as necessary

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h1 className="logo"></h1>
      <img src={logo} alt="" style={{width: '100%' }} />
      <nav>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/admin-dashboard">Admin</Link></li>
          <li><Link to="/departments">Departments</Link></li>
          <li><Link to="/viewproperties">ViewProperties</Link></li>
          <li><Link to="/contactUs">Contact</Link></li>
          <li><Link to="/reports">Reports</Link></li>
          <li><Link to="/AddNewProperty">AddNewProperty</Link></li>
          <li><Link to="/createaccount">CreateAccount</Link></li>
         
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
