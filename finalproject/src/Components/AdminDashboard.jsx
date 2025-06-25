import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import '../styles/AdminDashboard.css'; // Assuming you have a CSS file for styling


const AdminDashboard = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/login", {
        email,
        password
      });

      if (response.data.message === "Login successful") {
        setLoggedIn(true);
        setErrorMessage("");
      }
    } catch (error) {
      console.error(error);
      setErrorMessage(error.response?.data?.message || "Login failed");
    }
  };


  if (!loggedIn) {
    return (

      <>
           <header style={{ textAlign: 'center', padding: '30px', }}>
        <h1>Govt. Municipal Graduate College FSD (GMGC)</h1>
        <h2>Admin Dashboard</h2>
      </header>

        <div className="main-content-login">
          <div id="login-container" className="mx-auto mt-10 p-6 border rounded shadow">
            <Sidebar />
            <h1 className="text-2xl font-bold mb-4">Login</h1>
            <form id="loginForm" onSubmit={handleLogin} className="space-y-4">
              <div>
                <label htmlFor="email" className="block mb-1">Email:</label>
                <input
                  type="email"
                  id="email"
                  className="w-full border p-2 rounded"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />

              </div>

              <div>
                <label htmlFor="password" className="block mb-1">Password:</label>
                <input
                  type="password"
                  id="password"
                  className="w-full border p-2 rounded"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />

              </div>
              <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Login</button>
            </form>
            {errorMessage && <p className="text-red-600 mt-2">{errorMessage}</p>}
          </div>
        </div>


      </>
    );
  }

  return (
    <div>
      <header className="p-4 bg-gray-100 border-b">
        <h1 className="text-2xl font-bold mb-2">Admin Dashboard</h1>
        {/* <nav>
          <ul className="flex gap-4 text-blue-600 underline">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/admin-dashboard">Admin</Link></li>
            <li><Link to="/departments">Departments</Link></li>
            <li><Link to="/viewproperties">Properties</Link></li>
            <li><Link to="/contactUs">Contact</Link></li>
          </ul>
        </nav> */}

      </header>
      <div className="flex">
        <Sidebar />

        <main className="p-4 main-content-login">
          <section className="admin-panel max-w-4xl mx-auto">
            <h2 className="text-xl font-semibold mb-2">Welcome, Admin!</h2>
            <p className="mb-6">Use the options below to manage the college property data.</p>

            <div className="admin-cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
              <Link to="/addnewproperty" className="card block p-4 border rounded shadow hover:bg-gray-100 transition">
                <h3 className="text-lg font-semibold">Add Property</h3>
                <p className="text-sm">Add new property items to the system.</p>
              </Link>

              <Link to="/view-properties" className="card block p-4 border rounded shadow hover:bg-gray-100 transition">
                <h3 className="text-lg font-semibold">View Properties</h3>
                <p className="text-sm">Check all existing property records.</p>
              </Link>

              <Link to="/departments" className="card block p-4 border rounded shadow hover:bg-gray-100 transition">
                <h3 className="text-lg font-semibold">Departments</h3>
                <p className="text-sm">Manage or view department-wise assets.</p>
              </Link>

              <Link to="/reports" className="card block p-4 border rounded shadow hover:bg-gray-100 transition">
                <h3 className="text-lg font-semibold">Generate Reports</h3>
                <p className="text-sm">View and export property reports.</p>
              </Link>
            </div>
          </section>
        </main>

        {/* <footer className="text-center p-4 mt-8 bg-gray-100 border-t">
        <p>&copy; 2025 College Property Management System. All rights reserved.</p>
      </footer> */}

      </div>
    </div>


  );
};

export default AdminDashboard;