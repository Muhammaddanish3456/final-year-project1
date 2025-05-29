import React, { useState } from 'react';
import axios from 'axios';
import '../styles/CreateAccount.css'; // Adjust the path as necessary
import { useNavigate } from 'react-router-dom';

const CreateAccount = () => {
    const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const res = await axios.post('http://localhost:5000/api/register', {
        fullName: formData.fullName,
        email: formData.email,
        password: formData.password
      });

      alert(res.data.message);
      setFormData({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
      navigate('/admin-dashboard');
    } catch (err) {
      console.error(err);
      alert("Error creating account.");
    }
  };

  return (
    <div className="create-account-container">
      <form className="create-account-form" onSubmit={handleSubmit}>
        <h2>Create Account</h2>

        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />

        <button type="submit">Create Account</button>
      </form>
    </div>
  );
};

export default CreateAccount;
