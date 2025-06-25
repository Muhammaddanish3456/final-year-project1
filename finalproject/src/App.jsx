import React from "react";
import { Routes, Route } from 'react-router-dom';
import './App.css';

import AddNewProperty from "./Components/AddNewProperty";
import AdminDashboard from "./Components/AdminDashboard";
import ContactUs from "./Components/ContactUs";
import Departments from "./Components/Departments";
import Home from "./Components/Home";
import PropertyDetails from "./Components/PropertyDetails";
import Reports from "./Components/Reports";
import ViewProperties from "./Components/ViewProperties";
import CreateAccount from "./Components/CreateAccount";
import { useEffect } from "react";
import RepairList from "./Components/RepairList";
import MissingList from "./Components/MissingList";


const App = () => {
  useEffect(() => {
    fetch('http://localhost:5000/')
      .then(res => res.text())
      .then(data => console.log(data)); // Console mein output dikhai dega
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin-dashboard" element={<AdminDashboard />} />
      <Route path="/departments" element={<Departments />} />
      <Route path="/viewproperties" element={<ViewProperties />} />
      <Route path="/contactUs" element={<ContactUs />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="/propertydetails" element={<PropertyDetails />} />
      <Route path="/addnewproperty" element={<AddNewProperty />} />
      <Route path="/createaccount" element={<CreateAccount />} />
      <Route path="/repairlist" element={<RepairList />} />
      <Route path="/missinglist" element={<MissingList />} />
    </Routes>
  );
}

export default App;
