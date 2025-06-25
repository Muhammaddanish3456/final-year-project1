// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png'; // Adjust the path as necessary
import '../styles/Sidebar.css'; // Adjust the path as necessary

const Sidebar = () => {
  return (
    <div className="sidebar">


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
          <li><Link to="/RepairList">RepairList</Link></li>
          <li><Link to="/MissingList">MissingList</Link></li>
          <li><Link to="/PropertyDetails">PropertyDetails</Link></li>

        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
