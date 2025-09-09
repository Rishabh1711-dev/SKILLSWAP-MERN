import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import SkillSwap from "./DisplayPages/SkillSwap.jsx";
import GetStarted from "./DisplayPages/GetStarted.jsx";
import Register from "./DisplayPages/Register.jsx";

// Protected Route Component with Logging
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  
  // --- DEBUGGING ---
  console.log("ProtectedRoute check:", { token: token });

  if (!token) {
    console.log("No token found, redirecting to /getstarted");
    // If no token, redirect to the login page.
    return <Navigate to="/getstarted" />;
  }

  // If a token exists, render the child component (SkillSwap page).
  return children;
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={
            <ProtectedRoute>
              <SkillSwap />
            </ProtectedRoute>
          } 
        />
        <Route path="/getstarted" element={<GetStarted />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}