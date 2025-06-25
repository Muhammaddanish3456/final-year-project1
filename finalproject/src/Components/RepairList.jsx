import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RepairList = () => {
  const [repairs, setRepairs] = useState([]);

  useEffect(() => {
    fetchRepairs();
  }, []);

  const fetchRepairs = async () => {
    try {
   const res = await axios.get('http://localhost:5000/api/repairs');

      setRepairs(res.data);
    } catch (error) {
      console.error('Error fetching repairs:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/repairs/${id}`);
      fetchRepairs();
    } catch (error) {
      console.error('Error deleting repair:', error);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Repair List</h2>
      <table className="w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">ID</th>
            <th className="p-2 border">Department</th>
            <th className="p-2 border">Item</th>
            <th className="p-2 border">Description</th>
            <th className="p-2 border">Date</th>
            <th className="p-2 border">Status</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {repairs.map((repair) => (
            <tr key={repair.id}>
              <td className="p-2 border">{repair.id}</td>
              <td className="p-2 border">{repair.department}</td>
              <td className="p-2 border">{repair.item}</td>
              <td className="p-2 border">{repair.description}</td>
              <td className="p-2 border">{repair.date_reported}</td>
              <td className="p-2 border">{repair.status}</td>
              <td className="p-2 border">
                <button className="text-blue-500" onClick={() => alert('Edit feature coming soon')}>Edit</button>
                <button className="text-red-500 ml-2" onClick={() => handleDelete(repair.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RepairList;
