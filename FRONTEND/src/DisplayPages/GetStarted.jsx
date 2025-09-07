import "../styles/getstarted.css";
export default function GetStarted(){
return(
    <div className="GetStartedDisplayPage">
    <div class="loginpage">
        <div class="loginpage-left"><h1 class="logo">Skill<span>Swap</span></h1>
        <p><span>Welcome To ,</span><br></br>SkillSwap.AI is a peer-to-peer micro-learning and mentoring platform, where users can offer and receive knowledge in bite-sized live sessions or async tasks. It uses a smart matching algorithm (think Tinder x LinkedIn) to pair users based on:

* Skills they want to learn
* Skills they can teach
* Time zone availability
* Learning preference (text, video, challenge-based, async)
</p></div>
<form>
<div class="loginpage-right">
    <input type="text" placeholder="Username" id="username" required></input>
    <input type="password" placeholder="Password" id="password" required></input>
    <label><input type="checkbox"> Remember Me</input></label>
    <button type="submit" id="submit">LOGIN</button>
    <a href="getstarted.html">New User?<span> SignUp</span></a>
  </div>
</form>
    </div>
  </div>
);
}