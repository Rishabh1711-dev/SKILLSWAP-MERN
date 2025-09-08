import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/getstarted.css"; // We can reuse the same styles

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (event) => {
    event.preventDefault();
    setError("");

    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/register", {
        username,
        email,
        password,
      });

      // Store the token and redirect to the main site
      localStorage.setItem("token", response.data.token);
      navigate("/");

    } catch (err) {
      console.error("Registration failed:", err);
      setError(err.response?.data?.message || "Registration failed. Please try again.");
    }
  };

  return (
    <div className="get-started-page">
      <div className="loginpage">
        <div className="loginpage-left">
          <h1 className="logo">Skill<span>Swap</span></h1>
          <p><span>Join Us,</span><br />Create an account to start swapping skills with a vibrant community of learners and teachers.</p>
        </div>
        <form onSubmit={handleRegister}>
          <div className="loginpage-right">
            <h2>Create Account</h2>
            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            {error && <p style={{ color: 'red', fontSize: '14px' }}>{error}</p>}
            <button type="submit">REGISTER</button>
            <Link to="/getstarted">Already have an account?<span> Login</span></Link>
          </div>
        </form>
      </div>
    </div>
  );
}