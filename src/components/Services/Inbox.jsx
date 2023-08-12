import React, { useEffect, useState } from "react";
import "../pages/Service.css";
import { UilTrashAlt, UilPen } from "@iconscout/react-unicons";
import axios from "axios";

export default function Inbox() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch the list of users when the component mounts
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:4050/api/user/all"); // Use the appropriate route to fetch all users
      setUsers(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold mb-4">Registered Users</h2>
      <table className="inbo border-collapse border border-gray-900">
        <thead>
          <tr>
            <th className="p-2 font-semibold border border-gray-800">Username</th>
            <th className="p-2 font-semibold border border-gray-800">Full Name</th>
            <th className="p-2 font-semibold border border-gray-800">Email</th>
            <th className="p-2 font-semibold border border-gray-800">Password</th>
            <th className="p-2 font-semibold border border-gray-800">Phone Number</th>
            <th className="p-2 font-semibold border border-gray-800">Actions</th>
          </tr>
        </thead>
        <tbody>

          {users.map((user) => (
            <tr key={user._id}>
              <td className="p-2 border border-gray-600">{user.username}</td>
              <td className="p-2 border border-gray-600">{user.fullName}</td>
              <td className="p-2 border border-gray-600">{user.email}</td>
              <td className="p-2 border border-gray-600">**********</td>
              <td className="p-2 border border-gray-600">{user.phoneNumber}</td>
              <td className="p-2 border border-gray-600">
                {/* Icons for Delete and Update actions */}
                <UilTrashAlt className="text-red-500 mr-2 cursor-pointer" size={24} />
                <UilPen className="text-blue-500 cursor-pointer" size={24} />
              </td>
            </tr>
          ))}
          {/* Add more rows here if you have more data */}
        </tbody>
      </table>
    </div>
  );
}
