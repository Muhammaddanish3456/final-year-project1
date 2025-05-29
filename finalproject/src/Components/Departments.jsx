import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import "../styles/Sidebar.css"; 
import Footer  from "./Footer";

const Departments = () => {
  return (
   
    <div>
       <Sidebar />
      <header className="p-4 bg-gray-100 border-b">
<h1 className="site-name" >
  College Property System
</h1>
        <h1 className="text-2xl font-bold mb-2">Departments</h1>
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

      <main className="p-4 max-w-4xl mx-auto">
        <section className="departments-list">
          <h2 className="text-xl font-semibold mb-2">Department List</h2>
          <p className="mb-4">Below are the departments managing college properties.</p>

          <table className="w-full border border-gray-300 text-left">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-4 py-2">Department Name</th>
                <th className="border px-4 py-2">Head of Department</th>
                <th className="border px-4 py-2">Total Assets</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">Computer Science</td>
                <td className="border px-4 py-2">Miss.Sidra</td>
                <td className="border px-4 py-2">120</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Physics</td>
                <td className="border px-4 py-2">Rana Ateeq-ur-Rehman</td>
                <td className="border px-4 py-2">95</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Mathematics</td>
                <td className="border px-4 py-2">Mr.Basit</td>
                <td className="border px-4 py-2">102</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Chemistry</td>
                <td className="border px-4 py-2">Dr. Sana Iqbal</td>
                <td className="border px-4 py-2">88</td>
              </tr>
                <tr>
                <td className="border px-4 py-2">Phsycology</td>
                <td className="border px-4 py-2">Mr.Imran Zaidi</td>
                <td className="border px-4 py-2">50</td>
              </tr>
                <tr>
                <td className="border px-4 py-2">English</td>
                <td className="border px-4 py-2">Mr.Numan</td>
                <td className="border px-4 py-2">60</td>
              </tr>
                <tr>
                <td className="border px-4 py-2">Urdu</td>
                <td className="border px-4 py-2">Dr.Arif Hussain Arif</td>
                <td className="border px-4 py-2">56</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Economics</td>
                <td className="border px-4 py-2">Mr.Khalid Kainth</td>
                <td className="border px-4 py-2">90</td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
{/* 
      <footer className="text-center p-4 mt-8 bg-gray-100 border-t">
        <p>&copy; 2025 College Property Management System. All rights reserved.</p>
      </footer> */}

      <Footer/>
    </div>
  );
};

export default Departments;
