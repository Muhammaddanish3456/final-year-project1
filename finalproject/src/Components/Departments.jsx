import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import "../styles/Sidebar.css";

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
    <div>
      <Sidebar />
      <header className="p-4 bg-gray-100 border-b">
        <h1 className="site-name">College Property System</h1>
        <h1 className="text-2xl font-bold mb-2">Departments</h1>
      </header>

      <main className="p-4 max-w-4xl mx-auto">
        <section className="departments-list">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Department List</h2>
            <button
              onClick={() => {
                setShowModal(true);
                setEditDept(null);
                setFormData({ name: "", head: "" });
              }}
              className="px-4 py-2 bg-blue-600 text-white rounded"
            >
              Add Department
            </button>
          </div>
          <p className="mb-4">Below are the departments managing college properties.</p>

          {showModal && (
            <div className="fixed inset-0 bg-black bg-opacity-30 z-50">
              <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded shadow-lg w-96">
                <h2 className="text-xl font-bold mb-4">
                  {editDept ? "Edit" : "Add"} Department
                </h2>
                <input
                  type="text"
                  name="name"
                  placeholder="Department Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="border w-full p-2 mb-2"
                />
                <input
                  type="text"
                  name="head"
                  placeholder="Head of Department"
                  value={formData.head}
                  onChange={handleChange}
                  className="border w-full p-2 mb-4"
                />
                <div className="flex justify-end gap-2">
                  <button
                    onClick={() => setShowModal(false)}
                    className="px-4 py-2 bg-gray-300 rounded"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSubmit}
                    className="px-4 py-2 bg-green-600 text-white rounded"
                  >
                    {editDept ? "Update" : "Save"}
                  </button>
                </div>
              </div>
            </div>
          )}

          <table className="w-full border border-gray-300 text-left">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-4 py-2">Department Name</th>
                <th className="border px-4 py-2">Head of Department</th>
                <th className="border px-4 py-2">Total Assets</th>
                <th className="border px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {departments.map((dept) => (
                <tr key={dept._id}>
                  <td className="border px-4 py-2">{dept.name}</td>
                  <td className="border px-4 py-2">{dept.head}</td>
                  <td className="border px-4 py-2">{dept.totalAssets}</td>
                  <td className="border px-4 py-2">
                    <button
                      onClick={() => openEditModal(dept)}
                      className="mr-2 text-blue-600"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(dept._id)}
                      className="text-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              {departments.length === 0 && (
                <tr>
                  <td colSpan="4" className="border px-4 py-2 text-center">
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
  );
};

export default Departments;
