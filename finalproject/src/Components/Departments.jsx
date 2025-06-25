import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import "../styles/Departments.css"; // Assuming you have a CSS file for styling

const Departments = () => {
  const [departments, setDepartments] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editDept, setEditDept] = useState(null);
  const [formData, setFormData] = useState({ name: "", head: "" });

  // Fetch departments from backend
  useEffect(() => {
    fetchDepartments();
  }, []);

  const fetchDepartments = async () => {
    try {
      const res = await axios.get("http://localhost:5000/departments");
      setDepartments(res.data);
    } catch (error) {
      console.error("Error fetching departments:", error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      if (editDept) {
        await axios.put(`http://localhost:5000/departments/${editDept._id}`, formData);
      } else {
        await axios.post("http://localhost:5000/departments", formData);
      }
      setFormData({ name: "", head: "" });
      setEditDept(null);
      setShowModal(false);
      fetchDepartments();
    } catch (error) {
      console.error("Error saving department:", error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this department?")) {
      try {
        await axios.delete(`http://localhost:5000/departments/${id}`);
        fetchDepartments();
      } catch (error) {
        console.error("Error deleting department:", error);
      }
    }
  };

  const openEditModal = (dept) => {
    setEditDept(dept);
    setFormData({ name: dept.name, head: dept.head });
    setShowModal(true);
  };

  return (
    <div className="page-container">
      <div className="sidebar">                        
        <Sidebar />
      </div>
      <div className="main-content">
        <header>
          <h1 className="site-name">College Property System</h1>
          <h1>Departments</h1>
        </header>
        <main>
          <section className="departments-list">
            <div className="flex justify-between items-center mb-4">
              <h2>Department List</h2>
              <button
                onClick={() => {
                  setShowModal(true);
                  setEditDept(null);
                  setFormData({ name: "", head: "" });
                }}
                className="add-department-btn"
              >
                Add Department
              </button>
            </div>
            <p>Below are the departments managing college properties.</p>

            {showModal && (
              <div className="modal-overlay">
                <div className="modal">
                  <h2>{editDept ? "Edit" : "Add"} Department</h2>
                  <input
                    type="text"
                    name="name"
                    placeholder="Department Name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="head"
                    placeholder="Head of Department"
                    value={formData.head}
                    onChange={handleChange}
                  />
                  <div className="modal-actions">
                    <button
                      onClick={() => setShowModal(false)}
                      className="cancel-btn"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleSubmit}
                      className="save-btn"
                    >
                      {editDept ? "Update" : "Save"}
                    </button>
                  </div>
                </div>
              </div>
            )}

            <table>
              <thead>
                <tr>
                  <th>Department Name</th>
                  <th>Head of Department</th>
                  <th>Total Assets</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {departments.map((dept) => (
                  <tr key={dept._id}>
                    <td>{dept.name}</td>
                    <td>{dept.head}</td>
                    <td>{dept.totalAssets}</td>
                    <td>
                      <button
                        onClick={() => openEditModal(dept)}
                        className="edit-btn"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(dept._id)}
                        className="delete-btn"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
                {departments.length === 0 && (
                  <tr>
                    <td colSpan="4" className="text-center">
                      No departments found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Departments;