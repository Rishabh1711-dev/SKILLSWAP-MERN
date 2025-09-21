// FRONTEND/src/DisplayPages/Meetups.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Meetups = () => {
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    const fetchMeetups = async () => {
      const { data } = await axios.get('/api/meetups');
      setMeetups(data);
    };
    fetchMeetups();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6">Upcoming Meetups</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {meetups.map(meetup => (
          <div key={meetup._id} className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-2">{meetup.title}</h2>
            <p className="text-gray-700 mb-2">{meetup.description}</p>
            <p className="text-gray-600 mb-2">Skill: {meetup.skill}</p>
            <p className="text-gray-600">Date: {new Date(meetup.date).toLocaleDateString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Meetups;