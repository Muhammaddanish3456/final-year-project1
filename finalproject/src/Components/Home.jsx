import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import Footer from './Footer';
import '../styles/HomePage.css'; // Assuming you have a CSS file for styling

const HomePage = () => {
  return (
    <div className="homepage-container">
      {/* Header */}
      <header style={{ textAlign: 'center', padding: '30px', }}>
        <h1>Govt. Municipal Graduate College FSD (GMGC)</h1>
        <h2>Home</h2>
      </header>

      {/* Main Container */}
      <div className="flex">
        <Sidebar />

        <div className="main-content">
          <main className="main-section">
            {/* Welcome Section */}
            <section className="welcome">
              <h2 className="welcome-heading">
                Welcome to the College Property Management System
              </h2>
              <p className="welcome-text">
                This system streamlines the management of all college assets, including furniture, equipment, buildings, and more, ensuring efficiency and organization.
              </p>
              <Link to="/admin-dashboard" className="admin-button">
               <p id='ad'> Go to Admin Dashboard</p>
              </Link>
            </section>

            {/* Features Section */}
            <section className="features">
              <h2>Key Features</h2>
              <div className="feature-grid">
                <div className="feature-card">
                  <h3>Asset Tracking</h3>
                  <p>Monitor and manage all college assets in real-time with detailed records.</p>
                </div>
                <div className="feature-card">
                  <h3>Reports & Analytics</h3>
                  <p>Generate comprehensive reports to analyze asset usage and maintenance.</p>
                </div>
                <div className="feature-card">
                  <h3>User Management</h3>
                  <p>Assign roles and permissions to streamline administrative tasks.</p>
                </div>
              </div>
            </section>

            {/* About Section */}
            <section className="about">
              <h2>About GMGC</h2>
              <p>
                Government Municipal Graduate College, Faisalabad, is a prestigious institution dedicated to academic excellence and holistic development. Our property management system ensures that our campus resources are utilized efficiently to support our mission.
              </p>
              <Link to="/about">Learn More</Link>
            </section>

            {/* Contact Section */}
            <section className="contact">
              <h2>Get in Touch</h2>
              <p>
                Have questions or need assistance? Reach out to our support team for help with the property management system.
              </p>
              <Link to="/contact">Contact Us</Link>
            </section>
          </main>

          <Footer />
        </div>
      </div>
    </div>
  );
};

export default HomePage;