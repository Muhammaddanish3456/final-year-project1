// File: MissingList.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MissingList = () => {
  const [missingItems, setMissingItems] = useState([]);

  useEffect(() => {
    fetchMissingItems();
  }, []);

  const fetchMissingItems = async () => {
    try {
      const res = await axios.get('http://localhost:5000/missingItems');
      setMissingItems(res.data);
    } catch (err) {
      console.error('Error fetching missing items:', err);
    }
  };

 const handleDelete = async (id) => {
  try {
    await axios.delete(`http://localhost:5000/missingItems/${id}`);
    fetchMissingItems();
  } catch (err) {
    console.error('Error deleting item:', err);
  }
};


  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Missing Inventory Items</h2>
      <table className="w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">ID</th>
            <th className="p-2 border">Item Name</th>
            <th className="p-2 border">Department</th>
            <th className="p-2 border">Description</th>
            <th className="p-2 border">Date Reported</th>
            <th className="p-2 border">Status</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {missingItems.map((item) => (
            <tr key={item.id}>
              <td className="p-2 border">{item.id}</td>
              <td className="p-2 border">{item.itemName}</td>
              <td className="p-2 border">{item.department}</td>
              <td className="p-2 border">{item.description}</td>
              <td className="p-2 border">{item.dateReported}</td>
              <td className="p-2 border">{item.status}</td>
              <td className="p-2 border">
                <button className="text-blue-500" onClick={() => alert('Edit feature coming soon')}>Edit</button>
                <button className="text-red-500 ml-2" onClick={() => handleDelete(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MissingList;