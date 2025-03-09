import React, { useEffect, useState } from "react";
import axios from "axios";

const ProtectedData = () => {
  const [data, setData] = useState(null); // State to hold the fetched data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(""); // Error state

  // Fetch protected data on component mount
  useEffect(() => {
    const fetchProtectedData = async () => {
      const token = localStorage.getItem("authToken"); // Get token from localStorage

      if (!token) {
        setError("You are not authorized. Please log in.");
        setLoading(false);
        return;
      }

      try {
        // Send the token in the Authorization header
        const response = await axios.get("http://localhost:3000/api/v1/protected-route", {
          headers: {
            Authorization: `Bearer ${token}`, // Send the token in the Authorization header
          },
        });

        // Handle successful response
        setData(response.data); // Assuming the response contains the protected data
      } catch (err) {
        // Handle errors (e.g., unauthorized access, token expired)
        if (err.response && err.response.status === 401) {
          setError("Unauthorized access. Please log in again.");
        } else {
          setError("An error occurred. Please try again.");
        }
      } finally {
        setLoading(false); // Set loading to false once the request completes
      }
    };

    fetchProtectedData();
  }, []); // Empty dependency array to run only once when the component mounts

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h1>Protected Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre> {/* Displaying the fetched data */}
    </div>
  );
};

export default ProtectedData;
