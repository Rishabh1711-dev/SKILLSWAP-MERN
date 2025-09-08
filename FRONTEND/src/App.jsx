import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Import Pages
import SkillSwap from "./DisplayPages/SkillSwap.jsx";
import GetStarted from "./DisplayPages/GetStarted.jsx"; // This is our Login Page
import Register from "./DisplayPages/Register.jsx"; // Our new Register Page

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/getstarted" />;
};

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Protected Route: Only accessible if logged in */}
        <Route 
          path="/" 
          element={
            <ProtectedRoute>
              <SkillSwap />
            </ProtectedRoute>
          } 
        />
        
        {/* Public Routes */}
        <Route path="/getstarted" element={<GetStarted />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}