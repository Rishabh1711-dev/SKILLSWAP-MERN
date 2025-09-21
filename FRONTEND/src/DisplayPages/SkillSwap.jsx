import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/skillswap.css";

// Import Components
import Chatbot from "../components/Chatbot.jsx";

// You can manage your Cloudinary URLs here for easier access
const cloudinaryUrls = {
  illustration: "https://res.cloudinary.com/dtwjc8gng/image/upload/v1757260699/illustration-depicting-a-team-of-three-professionals-collaborating-and-brainstorming-new-ideas-represented-by-a-lightbulb-with-laptops-and-a-stack-of-books-free-vector_ebkpge.jpg",
  skillIcon: "https://res.cloudinary.com/dtwjc8gng/image/upload/v1757260698/icons8-skill-100_shmney.png",
  interfaceIcon: "https://res.cloudinary.com/dtwjc8gng/image/upload/v1757260697/icons8-interface-64_zuhlc4.png",
  communityIcon: "https://res.cloudinary.com/dtwjc8gng/image/upload/v1757260695/icons8-human-100_tbizi4.png",
  user1: "https://res.cloudinary.com/dtwjc8gng/image/upload/v1757260703/uifaces-popular-image_1_lswxjl.jpg",
  user2: "https://res.cloudinary.com/dtwjc8gng/image/upload/v1757260704/uifaces-popular-image_t9upq8.jpg",
  user3: "https://res.cloudinary.com/dtwjc8gng/image/upload/v1757260702/uifaces-human-image_fpotjs.jpg",
  canvaImg: "https://res.cloudinary.com/dtwjc8gng/image/upload/v1757260739/8522418_voqzid.jpg",
  resumeImg: "https://res.cloudinary.com/dtwjc8gng/image/upload/v1757260701/resume-3604240_640_ryhesj.jpg",
  spanishImg: "https://res.cloudinary.com/dtwjc8gng/image/upload/v1757260704/pexels-mundointelectual1998-8944614_sjm5pz.jpg",
  danceImg: "https://res.cloudinary.com/dtwjc8gng/image/upload/v1757260696/01_AshleyEllis_0078_ztp3bx.jpg",
  frontendImg: "https://res.cloudinary.com/dtwjc8gng/image/upload/v1757260690/How-to-Become-a-Front-End-Developer-in-2020_ha715g.png",
  interviewImg: "https://res.cloudinary.com/dtwjc8gng/image/upload/v1757260711/2017-09-14-Interviews-ThinkstockPhotos-621579258_x4ni7n.jpg",
  calendarIcon: "https://res.cloudinary.com/dtwjc8gng/image/upload/v1757260693/icons8-calendar-24_zklblx.png",
  clockIcon: "https://res.cloudinary.com/dtwjc8gng/image/upload/v1757260694/icons8-clock-24_s1nqox.png",
};
export default function SkillSwap() {
  const [chatOpen, setChatOpen] = useState(false);

  const toggleChat = () => setChatOpen(!chatOpen);

  return (
    <div className="skillSwapDisplayPage">
      <header className="navbar">
        <div className="logo">Skill<span>Swap</span></div>
        <nav className="nav-links">
          <a href="#" className="nav-link active">Home</a>
          <a href="#" className="nav-link">How It Works</a>
          <a href="#" className="nav-link">Skills</a>
          <a href="#" className="nav-link">Community</a>
          <a href="#" className="nav-link">FAQ</a>
        </nav>
        <Link to="/register" className="get-started">Get Started</Link>
      </header>

      <section className="hero">
        <div className="hero-text">
          <h1>Exchange <span className="highlight">Your Skills</span></h1>
          <p className="subtext">
            Have a skill? Photography, surfing, or teaching languages? Share it
            on SkillSwap and discover your perfect learning partner—online or in
            person.
          </p>
          <Link to="/find-partner" className="cta">Find A Skill Partner</Link>
        </div>
        <div className="hero-image">
          <img src={cloudinaryUrls.illustration} alt="Team Collaboration" />
        </div>
      </section>

      <section className="highlight-section">
        <h2>Learn <span className="highlight">Something New</span> For Free!</h2>
        <p className="subtext">
          Make a new friend and reach your personal growth goals, one skill at a
          time.
        </p>
      </section>

      <section className="features">
        <div className="feature-box">
          <img src={cloudinaryUrls.skillIcon} alt="Skill Marketplace" />
          <h3>Skill Marketplace</h3>
          <p>Browse a diverse catalog of skills—cooking, coding, photography, languages, and more. Learn what excites you!</p>
          <a href="#" className="learn-link">Learn More</a>
        </div>
        <div className="feature-box">
          <img src={cloudinaryUrls.interfaceIcon} alt="Interface" />
          <h3>New Interface</h3>
          <p>Connect with learners and teachers, schedule your swap, and start exchanging knowledge with ease.</p>
          <a href="#" className="learn-link">Learn More</a>
        </div>
        <div className="feature-box">
          <img src={cloudinaryUrls.communityIcon} alt="Community" />
          <h3>Vibrant Community</h3>
          <p>No matter your level, SkillSwap welcomes everyone. Be a learner, be a teacher, or be both!</p>
          <a href="#" className="learn-link">Learn More</a>
        </div>
      </section>

      <section className="explore">
        <div className="writings">
          <h1>Explore Our <span className="highlight">Skills</span></h1>
          <p>
            Explore a diverse range of skills contributed by passionate learners
            and experts from around the world. Our<br />
            community-driven platform connects you with the right people to
            learn from or teach.
          </p>
        </div>
        <div className="explore-link">
          <a href="#" className="filter-link" id="All">All</a>
          <a href="#" className="filter-link" id="Technology">Technology</a>
          <a href="#" className="filter-link" id="Design">Design</a>
          <a href="#" className="filter-link" id="Lifestyle">Lifestyle</a>
          <a href="#" className="filter-link" id="Business">Business</a>
          <a href="#" className="filter-link" id="Language">Language</a>
        </div>
        <div className="product-container">
          <div className="product-box" data-category="DESIGN">
            <Link to="/payment"><img className="product-image" src={cloudinaryUrls.canvaImg} alt="Canva course" /></Link>
            <div>
              <img src={cloudinaryUrls.calendarIcon} alt="calendar" />15th May 26
              <img src={cloudinaryUrls.clockIcon} alt="clock" />1 Hour 40 Minutes
            </div>
            <div className="product-discription">Canva For Beginners<div className="product-price">$35</div></div>
          </div>
          <div className="product-box" data-category="TECHNOLOGY">
            <Link to="/payment"><img className="product-image" src={cloudinaryUrls.resumeImg} alt="Resume writing course" /></Link>
            <div>
              <img src={cloudinaryUrls.calendarIcon} alt="calendar" />15th May 26
              <img src={cloudinaryUrls.clockIcon} alt="clock" />1 Hour 40 Minutes
            </div>
            <div className="product-discription">Resume & LinkedIn Writing<div className="product-price">$35</div></div>
          </div>
          <div className="product-box" data-category="Language">
            <Link to="/payment"><img className="product-image" src={cloudinaryUrls.spanishImg} alt="Spanish language course" /></Link>
            <div>
              <img src={cloudinaryUrls.calendarIcon} alt="calendar" />15th May 26
              <img src={cloudinaryUrls.clockIcon} alt="clock" />1 Hour 40 Minutes
            </div>
            <div className="product-discription">Conversational Spanish<div className="product-price">$35</div></div>
          </div>
          <div className="product-box" data-category="LIFESTYLE">
            <Link to="/payment"><img className="product-image" src={cloudinaryUrls.danceImg} alt="Dance lessons" /></Link>
            <div>
              <img src={cloudinaryUrls.calendarIcon} alt="calendar" />15th May 26
              <img src={cloudinaryUrls.clockIcon} alt="clock" />1 Hour 40 Minutes
            </div>
            <div className="product-discription">Dance Lessons For Beginners<div className="product-price">$35</div></div>
          </div>
          <div className="product-box" data-category="TECHNOLOGY LANGUAGE">
            <Link to="/payment"><img className="product-image" src={cloudinaryUrls.frontendImg} alt="Front-end development course" /></Link>
            <div>
              <img src={cloudinaryUrls.calendarIcon} alt="calendar" />15th May 26
              <img src={cloudinaryUrls.clockIcon} alt="clock" />1 Hour 40 Minutes
            </div>
            <div className="product-discription">Front End Development<div className="product-price">$35</div></div>
          </div>
          <div className="product-box" data-category="BUSINESS">
            <Link to="/payment"><img className="product-image" src={cloudinaryUrls.interviewImg} alt="Interview preparation" /></Link>
            <div>
              <img src={cloudinaryUrls.calendarIcon} alt="calendar" />15th May 26
              <img src={cloudinaryUrls.clockIcon} alt="clock" />1 Hour 40 Minutes
            </div>
            <div className="product-discription">Interview Preparations<div className="product-price">$35</div></div>
          </div>
        </div>
      </section>

      <section className="success-stories">
        <h2 className="section-title">Success <span>Stories</span></h2>
        <div className="story-container">
          <div className="story-card">
            <p className="story-text">“SkillSwap helped me find a coding mentor while I taught graphic design! It was a win-win.”</p>
            <div className="story-user">
              <img src={cloudinaryUrls.user1} alt="User" />
              <div><h4>K. Kumar</h4><span>UI Designer ↔ Front-End Learner</span></div>
            </div>
          </div>
          <div className="story-card">
            <p className="story-text">“I traded language lessons for guitar tutorials. The platform made it effortless and fun!”</p>
            <div className="story-user">
              <img src={cloudinaryUrls.user2} alt="User" />
              <div><h4>Mayank Pandey</h4><span>Language Coach ↔ Music Enthusiast</span></div>
            </div>
          </div>
          <div className="story-card">
            <p className="story-text">“Got free photography coaching by helping with social media marketing. Amazing experience.”</p>
            <div className="story-user">
              <img src={cloudinaryUrls.user3} alt="User" />
              <div><h4>Priya Yadav</h4><span>Photographer ↔ Marketing Specialist</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="faq-title">
          <h2>Got Questions?<br /><span>We've Got Answers</span></h2>
        </div>
        <div className="faq-container">
          <details className="faq-item">
            <summary className="faq-question">What is Skill Swap and how does it work?</summary>
            Skill Swap lets you connect with others to teach or learn skills by exchanging knowledge, no money involved.
          </details>
          <details className="faq-item">
            <summary className="faq-question">Is it free to join and use the platform?</summary>
            Yes, Skill Swap is completely free to use. Just sign up, create your profile, and start connecting with learners and teachers.
          </details>
          <details className="faq-item">
            <summary className="faq-question">How do I find the right person to swap skills with?</summary>
            Use our search and filter options or browse community recommendations to find the right match.
          </details>
          <details className="faq-item">
            <summary className="faq-question">What types of skills can I exchange?</summary>
            Anything from coding, language, cooking, music, writing, and more — if you can teach it, you can swap it!
          </details>
        </div>
      </section>
      
      <section className="cta-community">
        <div className="cta-wrapper">
          <h2>Become a Part of Our Learning Community</h2>
          <p>
            Join a vibrant network of learners and teachers exchanging skills
            across the globe. Whether you're here to teach, learn, or both —
            you’ll find a place where growth, support, and collaboration come
            naturally.
          </p>
          <div className="cta-input">
            <input type="email" placeholder="Enter Your Email" />
            <button>Subscribe</button>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-columns">
            <div className="footer-brand">
              <div className="logo">Skill<span>Swap</span></div>
              <p>SkillSwap is here for it! For establishing that connection! Make your match! In person or Online!</p>
            </div>
            <div className="footer-column">
              <h4>Company</h4>
              <ul><li>Teams</li><li>FAQ</li><li>Case Study</li><li>Career</li></ul>
            </div>
            <div className="footer-column">
              <h4>Quick Links</h4>
              <ul><li>Terms of Service</li><li>Help & Support</li></ul>
            </div>
            <div className="footer-column">
              <h4>Social Links(*)</h4>
              <ul>
                <li><a className="social-links" href="https://www.instagram.com/">Instagram</a></li>
                <li><a className="social-links" href="https://www.linkedin.com/">LinkedIn</a></li>
                <li><a className="social-links" href="https://leetcode.com/">LeetCode</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Contact</h4>
              <ul><li>☎ 9304969093</li><li>📧 rishabhbhardwaj0906@gmail.com</li></ul>
            </div>
        </div>
      </footer>
      
      <button id="chatbot-toggler" onClick={toggleChat}>
        <span className="material-symbols-rounded">mode_comment</span>
      </button>

      {chatOpen && <Chatbot />}
    </div>
  );
}