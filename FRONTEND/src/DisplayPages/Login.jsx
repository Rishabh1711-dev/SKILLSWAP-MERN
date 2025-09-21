import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
// import { useAuth } from "../context/AuthContext"; // Assuming you have this context
import "../styles/Login.css";

// Importing icons for the feature list
import { FaChalkboardTeacher, FaLightbulb, FaUsers } from 'react-icons/fa';

const Homepage = () => {
  // --- All of your existing login logic is preserved here ---
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // const { login } = useAuth(); // Uncomment when your AuthContext is ready
  const navigate = useNavigate();
  const { email, password } = formData;

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      // This is a mock success response. Replace with your actual API call.
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network request
      const mockUserData = { token: 'mock-token', user: { email } };
      // Real API call (keep this for your implementation)
      // const res = await axios.post("http://localhost:5000/api/users/login", { email, password });
      // login(res.data);
      
      console.log("Logged in with:", mockUserData); // For testing
      navigate("/skillswap"); // Redirect on success
    } catch (err) {
      setError(err.response?.data?.message || "Login failed. Please check your credentials.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="homepage-container">
      {/* LEFT - HERO SECTION */}
      <div className="hero-section">
        <h1 className="logo">Skill<span>Swap</span></h1>
        <div className="hero-content">
          <h2>Swap a Skill, Gain a Future.</h2>
          <p>Join a community where your knowledge is currency. Teach what you love, and learn what you've always dreamed of—no cash required.</p>
          <div className="features">
            <div className="feature-item">
              <FaLightbulb className="feature-icon" />
              <h3>Learn for Free</h3>
              <p>Master new skills from peers without the hefty price tag.</p>
            </div>
            <div className="feature-item">
              <FaChalkboardTeacher className="feature-icon" />
              <h3>Share Your Passion</h3>
              <p>Empower others and refine your own expertise by teaching.</p>
            </div>
            <div className="feature-item">
              <FaUsers className="feature-icon" />
              <h3>Build Connections</h3>
              <p>Connect with a global community of motivated learners and mentors.</p>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT - LOGIN SECTION */}
      <div className="login-section">
        <div className="login-form-container">
          <div className="login-header">
            <h3>Welcome Back</h3>
            <p>Sign in to continue your learning journey.</p>
          </div>

          <form onSubmit={onSubmit}>
            {error && <div className="error-message">{error}</div>}
            
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={onChange}
                placeholder="you@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={onChange}
                placeholder="••••••••"
              />
            </div>

            <div className="form-options">
              <a href="#">Forgot your password?</a>
            </div>

            <button className="login-button" type="submit" disabled={loading}>
              {loading ? "Signing in..." : "Sign in"}
            </button>

            <div className="register-prompt">
              <p>Don't have an account? <Link to="/register">Create one now</Link></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Homepage;