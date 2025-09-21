// FRONTEND/src/DisplayPages/Profile.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Profile = () => {
  const [user, setUser] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await axios.get(`/api/users/${id}`);
      setUser(data);
    };
    fetchUser();
  }, [id]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-4">{user.name}</h1>
        <p className="text-gray-600 mb-2">{user.email}</p>
        <p className="text-gray-800 mb-4">{user.bio}</p>
        <div className="mb-4">
          <h2 className="text-2xl font-semibold mb-2">Skills to Teach</h2>
          <ul className="list-disc list-inside">
            {user.skillsToTeach.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-2">Skills to Learn</h2>
          <ul className="list-disc list-inside">
            {user.skillsToLearn.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;