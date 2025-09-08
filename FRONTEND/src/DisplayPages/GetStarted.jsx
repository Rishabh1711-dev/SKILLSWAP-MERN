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
import { Link } from "react-router-dom";
import "../styles/getstarted.css";

export default function GetStarted() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // You can add your login logic here in the future
    alert("Login form submitted!");
  };

  return (
    // This root div gets the main class for page-specific styling
    <div className="get-started-page">
      <div className="loginpage">
        <div className="loginpage-left">
          <h1 className="logo">
            Skill<span>Swap</span>
          </h1>
          <p>
            <span>Welcome To,</span>
            <br />
            SkillSwap.AI is a peer-to-peer micro-learning and mentoring platform
            , where users can offer and receive knowledge in bite-sized live
            sessions or async tasks. It uses a smart matching algorithm (think
            Tinder x LinkedIn) to pair users based on:
            <br />
            Skills they want to learn
            <br />
            Skills they can teach
            <br />
            Time zone availability
            <br />
            Learning preference (text, video, challenge-based, async)
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="loginpage-right">
            <input type="text" placeholder="Username" id="username" required />
            <input
              type="password"
              placeholder="Password"
              id="password"
              required
            />
            <label>
              <input type="checkbox" /> Remember Me
            </label>
            <button type="submit" id="submit">
              LOGIN
            </button>
            <Link to="/GetStarted">
              New User?<span> SignUp</span>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
