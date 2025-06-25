import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import "../styles/ViewProperties.css"; // Assuming you have a CSS file for styling

const ViewProperties = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/properties/all");
      const data = await res.json();
      setProperties(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching properties:", error);
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this property?")) return;

    try {
      const res = await fetch(`http://localhost:5000/api/properties/delete/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        setProperties(properties.filter((property) => property._id !== id));
      } else {
        console.error("Failed to delete property");
      }
    } catch (error) {
      console.error("Error deleting property:", error);
    }
  };

  return (
    <div>
      <Sidebar />
      <header className="p-4 bg-gray-100 border-b">
        <h1 className="site-name">College Property System</h1>
        <h1 className="text-2xl font-bold mb-2" id="Ap">All Properties</h1>
      </header>

      <main className="p-4 max-w-6xl mx-auto">
        <section className="property-table bg-white shadow-md rounded p-6">
          <h2 className="text-xl font-semibold mb-4" id="Pl">Property List</h2>
          {loading ? (
            <p>Loading properties...</p>
          ) : properties.length === 0 ? (
            <p>No properties found.</p>
          ) : (
            <table className="w-full border border-collapse">
              <thead className="bg-gray-200">
                <tr>
                  <th className="border px-4 py-2">Property Name</th>
                  <th className="border px-4 py-2">Type</th>
                  <th className="border px-4 py-2">Department</th>
                  <th className="border px-4 py-2">Quantity</th>
                  <th className="border px-4 py-2">Location</th>
                  <th className="border px-4 py-2">Condition</th>
                  <th className="border px-4 py-2">File</th>
                  <th className="border px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {properties.map((property) => (
                  <tr key={property._id}>
                    <td className="border px-4 py-2">{property.name}</td>
                    <td className="border px-4 py-2">{property.type}</td>
                    <td className="border px-4 py-2">{property.department?.name || "N/A"}</td>
                    <td className="border px-4 py-2">{property.quantity}</td>
                    <td className="border px-4 py-2">{property.location}</td>
                    <td className="border px-4 py-2">{property.condition}</td>
                    <td className="border px-4 py-2">
                      {property.filePath ? (
                        property.filePath.match(/\.(jpeg|jpg|png|gif)$/i) ? (
                          <img
                            src={`http://localhost:5000/${property.filePath.replace(/\\/g, "/")}`}
                            alt="Property"
                            className="w-16 h-16 object-cover rounded" width={100} height={100}
                          />
                        ) : (
                          <a
                            href={`http://localhost:5000/${property.filePath.replace(/\\/g, "/")}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 underline"
                          >
                            View File
                          </a>
                        )
                      ) : (
                        "No file"
                      )}
                    </td>

                    <td className="border px-4 py-2 text-center">
                      <button
                        onClick={() => handleDelete(property._id)}
                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ViewProperties;
