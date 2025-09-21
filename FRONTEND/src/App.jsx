// FRONTEND/src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './DisplayPages/Login';
import SkillSwap from './DisplayPages/SkillSwap';
import FindYourSkillPartner from './DisplayPages/FindYourSkillPartner';
import Register from './DisplayPages/Register';
import Meetup from './DisplayPages/Meetups';
import Profile from './DisplayPages/Profile';
import ComingSoon from './DisplayPages/ComingSoon';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/skillswap" element={<SkillSwap />} />
        <Route path="/find-partner" element={<FindYourSkillPartner />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/meetup" element={<Meetup />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
      </Routes>
    </>
  );
};

export default App;