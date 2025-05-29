import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import Footer from './Footer';

const HomePage = () => {
  return (
    <div>
      <header className="p-4 bg-gray-100 border-b">
       <h1 className="site-name">
                Govt. Muncipal Graduate College FSD(GMGC)</h1>
        <h1 className="text-2xl font-bold mb-2">Home</h1>
        
      </header>

    <div className="homepage-container">
      <Sidebar />

      <div className="main-content">
        <main className="main-section">
          <section className="welcome">
            <h2 className="welcome-heading">
              Welcome to the College Property Management System
            </h2>
            <p className="welcome-text">
              This system helps manage and organize all physical assets and properties in the college,
              including furniture, equipment, buildings, and more.
            </p>
            <Link to="/admin-dashboard" className="admin-button">
              Go to Admin Panel
            </Link>
          </section>
        </main>

        <Footer />

      </div>
    </div>
    </div>
  );
};

export default HomePage;
