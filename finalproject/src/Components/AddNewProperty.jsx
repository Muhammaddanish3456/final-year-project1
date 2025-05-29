import React, { useState } from "react";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

const AddNewProperty = () => {
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    department: "",
    quantity: 1,
    location: "",
    condition: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/properties", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      if (res.ok) {
        setMessage("Property added successfully!");
        setFormData({
          name: "",
          type: "",
          department: "",
          quantity: 1,
          location: "",
          condition: "",
        });
      } else {
        setMessage(data.message || "Error adding property.");
      }
    } catch (err) {
      console.error("Error:", err);
      setMessage("Server error. Please try again.");
    }
  };

  return (
    <div>
      <Sidebar />
      <header className="p-4 bg-gray-100 border-b">
        <h1 className="site-name">College Property System</h1>
        <h1 className="text-2xl font-bold mb-2">Add New Property</h1>
      </header>

      <main className="p-4">
        <section className="form-section max-w-xl mx-auto">
          <h2 className="text-xl font-semibold mb-4">Enter Property Details</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name">Property Name:</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full border p-2" />
            </div>
            <div>
              <label htmlFor="type">Property Type:</label>
              <input type="text" name="type" value={formData.type} onChange={handleChange} required className="w-full border p-2" />
            </div>
            <div>
              <label htmlFor="department">Department:</label>
              <select name="department" value={formData.department} onChange={handleChange} required className="w-full border p-2">
                <option value="">-- Select Department --</option>
                <option value="Computer Science">Computer Science</option>
                <option value="Electrical Engineering">Physics</option>
                <option value="Mechanical Engineering">Chemistry</option>
                <option value="Mechanical Engineering">Psychology</option>
                <option value="Mechanical Engineering">Urdu</option>
                <option value="Mechanical Engineering">Economic</option>
                <option value="Chemistry">Chemistry</option>
              </select>
            </div>
            <div>
              <label htmlFor="quantity">Quantity:</label>
              <input type="number" name="quantity" value={formData.quantity} onChange={handleChange} min="1" required className="w-full border p-2" />
            </div>
            <div>
              <label htmlFor="location">Location:</label>
              <input type="text" name="location" value={formData.location} onChange={handleChange} required className="w-full border p-2" />
            </div>
            <div>
              <label htmlFor="condition">Condition:</label>
              <input type="text" name="condition" value={formData.condition} onChange={handleChange} required className="w-full border p-2" />
            </div>
            <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
              Add Property
            </button>
            {message && <p className="mt-2 text-green-600">{message}</p>}
          </form>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AddNewProperty;
