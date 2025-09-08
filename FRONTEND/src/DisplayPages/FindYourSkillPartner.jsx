import "../styles/FindYourSkillPartner.css"
import { Link } from "react-router-dom";
export default function FindYourSkillPartner(){
  return (
    <div className="FindYourSkillPartnerDisplayPage">
         <section class="navbar">
        <h1 class="logo">Skill<span>Swap</span></h1>
    </section>
    <section class="skills">
        <div class="skills-heading">Tell Us More About<span>Your Skills</span></div>
        <div class="skills-form">
            <input class="skills-box"type="text"placeholder="FIELD OF INTEREST..."required></input>
            <input class="skills-box"type="text"placeholder="YEARS OF EXPERIENCE"required></input>
            <input class="skills-box"type="text"placeholder="GENDER..."required></input>
            <input class="skills-box"type="text"placeholder="ABOUT YOURSELF"required></input>
            <input class="skills-box"type="text"placeholder="PREFFERED DURATION OF COUSRE"required></input>
        </div>
        <div class="ctaf"><Link to="/">Find A Skill Partner</Link></div>
    </section>
    </div>
  )
}