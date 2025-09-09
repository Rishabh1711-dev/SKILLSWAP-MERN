// import "../styles/getstarted.css";
// export default function GetStarted(){
// return(
//     <div className="get-started-page">
//     <div className="loginpage">
//         <div className="loginpage-left"><h1 className="logo">Skill<span>Swap</span></h1>
//         <p><span>Welcome To ,</span><br/>SkillSwap.AI is a peer-to-peer micro-learning and mentoring platform, where users can offer and receive knowledge in bite-sized live sessions or async tasks. It uses a smart matching algorithm (think Tinder x LinkedIn) to pair users based on:

// * Skills they want to learn
// * Skills they can teach
// * Time zone availability
// * Learning preference (text, video, challenge-based, async)
// </p></div>
// <form>
// <div className="loginpage-right">
//     <input type="text" placeholder="Username" id="username" required></input>
//     <input type="password" placeholder="Password" id="password" required></input>
//     <label><input type="checkbox"> Remember Me</input></label>
//     <button type="submit" id="submit">LOGIN</button>
//     <a href="getstarted.html">New User?<span> SignUp</span></a>
//   </div>
// </form>
//     </div>
//   </div>
// );
// }
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api"; // Use the centralized api instance
import "../styles/getstarted.css";

export default function GetStarted() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    // This stops the page from reloading, which is critical
    event.preventDefault(); 
    setError("");

    try {
      // This sends the data to the backend
      const response = await api.post("/login", { email, password });
      
      localStorage.setItem("token", response.data.token);
      navigate("/");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed.");
    }
  };

  return (
    <div className="get-started-page">
      <div className="loginpage">
        {/* ... */}
        <form onSubmit={handleLogin}> {/* Ensure onSubmit is linked */}
          <div className="loginpage-right">
            <h2>Login</h2>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            {error && <p style={{color: 'red'}}>{error}</p>}
            <button type="submit">LOGIN</button>
            <Link to="/register">Don't have an account?<span> SignUp</span></Link>
          </div>
        </form>
      </div>
    </div>
  );
}
