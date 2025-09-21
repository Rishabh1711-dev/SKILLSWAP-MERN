// FRONTEND/src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './DisplayPages/Login'; // Changed from GetStarted
import SkillSwap from './DisplayPages/SkillSwap';
import FindYourSkillPartner from './DisplayPages/FindYourSkillPartner';
import Register from './DisplayPages/Register';
import Navbar from './components/Navbar';
// NOTE: I've removed the Profile page for now as it needs an ID and authentication to work.
// We can add it back once the login flow is complete.

const App = () => {
  return (
    // The <Router> is now in main.jsx, so we remove it from here
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} /> {/* This now correctly points to your Login page */}
        <Route path="/skillswap" element={<SkillSwap />} />
        <Route path="/find-partner" element={<FindYourSkillPartner />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
};

export default App;