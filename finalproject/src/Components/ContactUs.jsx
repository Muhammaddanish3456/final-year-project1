import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import "../styles/Sidebar.css";
import Footer from "./Footer";
import "../styles/ContactUs.css"; // Assuming you have a CSS file for styling
const ContactUs = () => {
  return (
    <div>
      <Sidebar/>
      <header className="p-4 bg-gray-100 border-b">
           <h1 className="site-name" >
  College Property System
</h1>
        <h1 className="text-2xl font-bold mb-2">Contact Us</h1>
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
        <section className="contact-section mb-10">
          <h2 className="text-xl font-semibold mb-4">Send Us a Message</h2>
          <form className="contact-form grid gap-4">
            <div>
              <label htmlFor="name" className="block font-medium">Your Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full border p-2 rounded"
              />
            </div>

            <div>
              <label htmlFor="email" className="block font-medium">Your Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full border p-2 rounded"
              />
            </div>

            <div>
              <label htmlFor="message" className="block font-medium">Message:</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                className="w-full border p-2 rounded"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Send Message
            </button>
          </form>
        </section>

        <section className="contact-info">
          <h3 className="text-lg font-semibold mb-2">Contact Information</h3>
          <p><strong>Address:</strong> College Campus, Main Road, City</p>
          <p><strong>Email:</strong> info@collegeproperty.edu.pk</p>
          <p><strong>Phone:</strong> +92 300 1234567</p>
        </section>
      </main>

      <Footer/>
    </div>
  );
};

export default ContactUs;
