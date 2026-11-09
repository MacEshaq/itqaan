// src/components/UserList.jsx
import { useState, useEffect } from "react";

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Uses VITE_API_URL for Vite, or REACT_APP_API_URL for Create React App
  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(`${API_URL}/itqaan/server/users`);
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        const data = await response.json();
        // Log the fetched users to inspect the exact structure
        console.log("Users from Express API:", data);
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [API_URL]);

  if (loading) return <p>Loading users...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul>
      {users.map((user) => (
        <li key={user._id}>{user.name}</li>
      ))}
    </ul>
  );
}

export default UserList;
