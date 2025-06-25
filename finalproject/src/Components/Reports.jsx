import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import "../styles/Reports.css"; // Assuming you have a CSS file for styling  

const Reports = () => {
  return (
    <div>
      <Sidebar/>    
      <header className="p-4 bg-gray-100 border-b">
        <h1 className="site-name" >
  College Property System
</h1>
        <h1 className="text-2xl font-bold mb-2">Reports</h1>
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

      <main className="p-4 max-w-4xl mx-auto" style={{marginLeft: "220px"}}>
        <section className="reports-section bg-white shadow-md rounded p-6">
          <h2 className="text-xl font-semibold mb-4">Property Reports Summary</h2>
          <table className="w-full border border-collapse">
            <thead className="bg-gray-200">
              <tr>
                <th className="border px-4 py-2">Department</th>
                <th className="border px-4 py-2">Total Items</th>
                <th className="border px-4 py-2">In Good Condition</th>
                <th className="border px-4 py-2">Needs Repair</th>
                <th className="border px-4 py-2">Missing</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">Computer Science</td>
                <td className="border px-4 py-2">120</td>
                <td className="border px-4 py-2">100</td>
                <td className="border px-4 py-2">15</td>
                <td className="border px-4 py-2">5</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Electrical Engineering</td>
                <td className="border px-4 py-2">95</td>
                <td className="border px-4 py-2">85</td>
                <td className="border px-4 py-2">7</td>
                <td className="border px-4 py-2">3</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Mechanical Engineering</td>
                <td className="border px-4 py-2">102</td>
                <td className="border px-4 py-2">88</td>
                <td className="border px-4 py-2">10</td>
                <td className="border px-4 py-2">4</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Chemistry</td>
                <td className="border px-4 py-2">88</td>
                <td className="border px-4 py-2">75</td>
                <td className="border px-4 py-2">10</td>
                <td className="border px-4 py-2">3</td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>

      {/* <footer className="text-center p-4 mt-8 bg-gray-100 border-t">
        <p>&copy; 2025 College Property Management System. All rights reserved.</p>
      </footer> */}
      <Footer/>
    </div>
  );
};

export default Reports;
