import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SkillSwap from "./DisplayPages/SkillSwap.jsx";
import GetStarted from "./DisplayPages/GetStarted.jsx";
import FindYourSkillPartner from "./DisplayPages/FindYourSkillPartner.jsx";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SkillSwap />} />
        <Route path="/GetStarted" element={<GetStarted />} />
        <Route path="/findyourskillpartner" element={<FindYourSkillPartner />} />
      </Routes>
    </Router>
  );
}
