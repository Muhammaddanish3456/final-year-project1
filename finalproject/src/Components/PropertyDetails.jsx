import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import "../styles/Sidebar.css";
import "../styles/PropertyDetails.css"; // Assuming you have a CSS file for styling


const PropertyDetails = () => {
  return (
    <div>
      <Sidebar/>
      <header className="p-4 bg-gray-100 border-b">
        <h1 className="site-name" >
  College Property System
</h1>
        <h1 className="text-2xl font-bold mb-2">Property Details</h1>
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

      <main className="p-4 max-w-3xl mx-auto">
        <section className="details-card bg-white shadow rounded p-6">
          <h2 className="text-xl font-semibold mb-4">Projector</h2>
          <p><strong>Type:</strong> Electronics</p>
          <p><strong>Department:</strong> Computer Science</p>
          <p><strong>Quantity:</strong> 5</p>
          <p><strong>Location:</strong> Lab A</p>
          <p><strong>Condition:</strong> Good</p>
          <p><strong>Date of Purchase:</strong> January 15, 2022</p>
          <p><strong>Vendor:</strong> Tech Supplies Ltd.</p>
          <p><strong>Warranty:</strong> 3 Years</p>
          <p><strong>Notes:</strong> Used for presentations and lectures in CS labs.</p>
        </section>
      </main>

      <footer className="text-center p-4 mt-8 bg-gray-100 border-t">
        <p>&copy; 2025 College Property Management System. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default PropertyDetails;
