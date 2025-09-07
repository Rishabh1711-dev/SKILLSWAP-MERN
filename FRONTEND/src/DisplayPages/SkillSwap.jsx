import React, { useState, useEffect } from "react";
import "../styles/skillswap.css";

export default function SkillSwap() {
  const [chatOpen, setChatOpen] = useState(false);

  const toggleChat = () => setChatOpen(!chatOpen);

  // FAQ toggle
  useEffect(() => {
    const details = document.querySelectorAll(".faq-item");
    details.forEach((el) =>
      el.addEventListener("toggle", (e) => {
        const summary = el.querySelector(".faq-question");
        if (el.open) summary.classList.add("active");
        else summary.classList.remove("active");
      })
    );
  }, []);

  // Product filter logic
  useEffect(() => {
    const links = document.querySelectorAll(".filter-link");
    const products = document.querySelectorAll(".product-box");

    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const category = link.id.toUpperCase();

        links.forEach((l) => l.classList.remove("active"));
        link.classList.add("active");

        products.forEach((p) => {
          const pCat = p.dataset.category.toUpperCase();
          if (category === "ALL" || pCat.includes(category)) p.style.display = "flex";
          else p.style.display = "none";
        });
      });
    });
  }, []);

  return (
    <div className="skillSwapDisplayPage">
        <header class="navbar">
        <div class="logo">Skill<span>Swap</span></div>
        <nav class="nav-links">
          <a href="#" class="nav-link active">Home</a>
          <a href="#" class="nav-link active">How It Works</a>
          <a href="#" class="nav-link active">Skills</a>
          <a href="#" class="nav-link active">Community</a>
          <a href="#" class="nav-link active">FAQ</a>
        </nav>
        <a href="getStarted.html" class="get-started">Get Started</a>
      </header>

      <section class="hero">
        <div class="hero-text">
          <h1>Exchange <span class="highlight">Your Skills</span></h1>
          <p class="subtext">
            Have a skill? Photography, surfing, or teaching languages? Share it
            on SkillSwap and discover your perfect learning partner—online or in
            person.
          </p>
          <a href="FindYourSkillPartner.html" class="cta"
            >Find A Skill Partner</a
          >
        </div>
        <div class="hero-image">
          <img
            src="/SKILLSWAP/media/illustration-depicting-a-team-of-three-professionals-collaborating-and-brainstorming-new-ideas-represented-by-a-lightbulb-with-laptops-and-a-stack-of-books-free-vector.jpg"
            alt="Team Collaboration"
          />
        </div>
      </section>

      <section class="highlight-section">
        <h2>Learn <span class="highlight">Something New</span> For Free!</h2>
        <p class="subtext">
          Make a new friend and reach your personal growth goals, one skill at a
          time.
        </p>
      </section>

      <section class="features">
        <div class="feature-box">
          <img
            src="/SKILLSWAP/media/icons8-skill-50.png"
            alt="Skill Marketplace"
          />
          <h3>Skill Marketplace</h3>
          <p>
            Browse a diverse catalog of skills—cooking, coding, photography,
            languages, and more. Learn what excites you!
          </p>
          <a
            href="https://in.search.yahoo.com/search?fr=mcafee&type=E210IN1590G0&p=SKILL+MARKETPLACE"
            class="learn-link"
            >Learn More</a
          >
        </div>
        <div class="feature-box">
          <img src="/SKILLSWAP/media/icons8-interface-40.png" alt="Interface" />
          <h3>New Interface</h3>
          <p>
            Connect with learners and teachers, schedule your swap, and start
            exchanging knowledge with ease.
          </p>
          <a
            href="https://in.search.yahoo.com/search?fr=mcafee&type=E210IN1590G0&p=NEW+INTERFACE"
            class="learn-link"
            >Learn More</a
          >
        </div>
        <div class="feature-box">
          <img src="/SKILLSWAP/media/icons8-human-100.png" alt="Community" />
          <h3>Vibrant Community</h3>
          <p>
            No matter your level, SkillSwap welcomes everyone. Be a learner, be
            a teacher, or be both!
          </p>
          <a
            href="https://in.search.yahoo.com/search?fr=mcafee&type=E210IN1590G0&p=vibrant+community"
            class="learn-link"
            >Learn More</a
          >
        </div>
      </section>
      <section class="explore">
        <div class="writings">
          <h1>Explore Our <span class="highlight">Skills</span></h1>
          <p>
            Explore a diverse range of skills contributed by passionate learners
            and experts from around the world . Our<br />
            community-driven platform connects you with the right people to
            learn from or teach .
          </p>
        </div>
        <div class="explore-link">
          <a href="#" class="filter-link" id="All">All</a>
          <a href="#" class="filter-link" id="Technology">Technology</a>
          <a href="#" class="filter-link" id="Design">Design</a>
          <a href="#" class="filter-link" id="Lifestyle">Lifestyle</a>
          <a href="#" class="filter-link" id="Business">Business</a>
          <a href="#" class="filter-link" id="Technology">Language</a>
        </div>
        <div class="product-container">
          <div class="product-box" data-category="DESIGN">
            <a href="payment.html">
              <img
                class="product-image"
                src="\SKILLSWAP\media\ai-generated-9148695_640.jpg"
              />
            </a>
            <div>
              <img src="\SKILLSWAP\media\icons8-calendar-24.png" />15th May
              26<img src="\SKILLSWAP\media\icons8-clock-24.png" />1 Hour 40
              Minutes
            </div>
            <div class="product-discription">
              Canva For Beginners
              <div class="product-price">$35</div>
            </div>
          </div>
          <div class="product-box" data-category="TECHNOLOGY">
            <a href="payment.html">
              <img
                class="product-image"
                src="\SKILLSWAP\media\resume-3604240_640.jpg"
              />
            </a>
            <div>
              <img src="\SKILLSWAP\media\icons8-calendar-24.png" />15th May
              26<img src="\SKILLSWAP\media\icons8-clock-24.png" />1 Hour 40
              Minutes
            </div>
            <div class="product-discription">
              Resume & LinkedIn Writing
              <div class="product-price">$35</div>
            </div>
          </div>
          <div class="product-box" data-category="Technology">
            <a href="payment.html">
              <img
                class="product-image"
                src="\SKILLSWAP\media\pexels-mundointelectual1998-8944614.jpg"
              />
            </a>
            <div>
              <img src="\SKILLSWAP\media\icons8-calendar-24.png" />15th May
              26<img src="\SKILLSWAP\media\icons8-clock-24.png" />1 Hour 40
              Minutes
            </div>
            <div class="product-discription">
              Conversational Spanish
              <div class="product-price">$35</div>
            </div>
          </div>
          <div class="product-box" data-category="LIFESTYLE">
            <a href="payment.html">
              <img
                class="product-image"
                src="\SKILLSWAP\media\01_AshleyEllis_0078.jpg"
              />
            </a>
            <div>
              <img src="\SKILLSWAP\media\icons8-calendar-24.png" />15th May
              26<img src="\SKILLSWAP\media\icons8-clock-24.png" />1 Hour 40
              Minutes
            </div>
            <div class="product-discription">
              Dance Lessons For Beginners
              <div class="product-price">$35</div>
            </div>
          </div>
          <div class="product-box" data-category="TECHNOLOGY LANGUAGE">
            <a href="payment.html">
              <img
                class="product-image"
                src="\SKILLSWAP\media\How-to-Become-a-Front-End-Developer-in-2020.png"
              />
            </a>
            <div>
              <img src="\SKILLSWAP\media\icons8-calendar-24.png" />15th May
              26<img src="\SKILLSWAP\media\icons8-clock-24.png" />1 Hour 40
              Minutes
            </div>
            <div class="product-discription">
              Front End Development
              <div class="product-price">$35</div>
            </div>
          </div>
          <div class="product-box" data-category="BUSINESS">
            <a href="payment.html">
              <img
                class="product-image"
                src="\SKILLSWAP\media\2017-09-14-Interviews-ThinkstockPhotos-621579258.jpg"
              />
            </a>
            <div>
              <img src="\SKILLSWAP\media\icons8-calendar-24.png" />15th May
              26<img src="\SKILLSWAP\media\icons8-clock-24.png" />1 Hour 40
              Minutes
            </div>
            <div class="product-discription">
              Interview Preparations
              <div class="product-price">$35</div>
            </div>
          </div>
        </div>
      </section>
      <section class="success-stories">
        <h2 class="section-title">Success <span>Stories</span></h2>
        <div class="story-container">
          <div class="story-card">
            <p class="story-text">
              “SkillSwap helped me find a coding mentor while I taught graphic
              design! It was a win-win.”
            </p>
            <div class="story-user">
              <img
                src="\SKILLSWAP\media\uifaces-popular-image (1).jpg"
                alt="User"
              />
              <div>
                <h4>K. Kumar</h4>
                <span>UI Designer ↔ Front-End Learner</span>
              </div>
            </div>
          </div>
          <div class="story-card">
            <p class="story-text">
              “I traded language lessons for guitar tutorials. The platform made
              it effortless and fun!”
            </p>
            <div class="story-user">
              <img
                src="\SKILLSWAP\media\uifaces-popular-image.jpg"
                alt="User"
              />
              <div>
                <h4>Mayank Pandey</h4>
                <span>Language Coach ↔ Music Enthusiast</span>
              </div>
            </div>
          </div>
          <div class="story-card">
            <p class="story-text">
              “Got free photography coaching by helping with social media
              marketing. Amazing experience.”
            </p>
            <div class="story-user">
              <img src="\SKILLSWAP\media\uifaces-human-image.jpg" alt="User" />
              <div>
                <h4>Priya Yadav</h4>
                <span>Photographer ↔ Marketing Specialist</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="faq-section">
        <div class="faq-title">
          <h2>Got Questions?<br /><span>We've Got Answers</span></h2>
        </div>
        <div class="faq-container">
          <details class="faq-item">
            <summary class="faq-question">
              What is Skill Swap and how does it work?
            </summary>
            Skill Swap lets you connect with others to teach or learn skills by
            exchanging knowledge, no money involved
          </details>
          <details class="faq-item">
            <summary class="faq-question active">
              Is it free to join and use the platform?
            </summary>
            Yes, Skill Swap is completely free to use. Just sign up, create your
            profile, and start connecting with learners and teachers.
          </details>
          <details class="faq-item">
            <summary class="faq-question">
              How do I find the right person to swap skills with?
            </summary>
            Use our search and filter options or browse community
            recommendations to find the right match.
          </details>
          <details class="faq-item">
            <summary class="faq-question">
              What types of skills can I exchange?
            </summary>
            Anything from coding, language, cooking, music, writing, and more —
            if you can teach it, you can swap it!
          </details>
        </div>
      </section>
      <section class="cta-community">
        <div class="cta-wrapper">
          <h2>Become a Part of Our Learning Community</h2>
          <p>
            Join a vibrant network of learners and teachers exchanging skills
            across the globe. Whether you're here to teach, learn, or both —
            you’ll find a place where growth, support, and collaboration come
            naturally.
          </p>
          <div class="cta-input">
            <input type="email" placeholder="Enter Your Email" />
            <button>Subscribe</button>
          </div>
        </div>
      </section>
      <footer class="footer">
        <div class="footer-columns">
          <div class="footer-brand">
            <div class="logo">Skill<span>Swap</span></div>
            <p>
              SkillSwap is here for it! For establishing that connection! Make
              your match! In person or Online!
            </p>
          </div>

          <div class="footer-column">
            <h4>Company</h4>
            <ul>
              <li>Teams</li>
              <li>FAQ</li>
              <li>Case Study</li>
              <li>Career</li>
            </ul>
          </div>

          <div class="footer-column">
            <h4>Quick Links</h4>
            <ul>
              <li>Terms of Service</li>
              <li>Help & Support</li>
            </ul>
          </div>

          <div class="footer-column">
            <h4>Social Links(*)</h4>
            <ul>
              <li>
                <a
                  class="social-links"
                  href="https://www.instagram.com/rishabh_1711_?igsh=MTEwcG9mNGFvMzZqaA%3D%3D&utm_source=qr"
                  >Instagram</a
                >
              </li>
              <li>
                <a
                  class="social-links"
                  href="https://www.linkedin.com/in/rishabh-bhardwaj-a875252a8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                  >LinkedIn</a
                >
              </li>
              <li>
                <a
                  class="social-links"
                  href="https://www.linkedin.com/in/rishabh-bhardwaj-a875252a8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                  >LeetCode</a
                >
              </li>
            </ul>
          </div>
          <div class="footer-column">
            <h4>Contact</h4>
            <ul>
              <li>☎ 9304969093</li>
              <li>📧 rishabhbhardwaj0906@gmail.com</li>
            </ul>
          </div>
        </div>
      </footer>
    <button id="chatbot-toggler">
      <span class="material-symbols-rounded"> mode_comment</span>
      <span class="material-symbols-rounded"> close</span>
    </button>
<section class="chat-bot-bot">
    <div class="chatbot-popup">
      <div class="chat-header">
        <div class="header-info">
       <img id="chatbot-logo"src="\SKILLSWAP\media\bot.png" alt="chatbotlogo"></img>
          <h2 class="logo-text">Chatbot</h2>
        </div>
        <button id="close-chatbot" class="material-symbols-outlined"> keyboard_arrow_down </button>
      </div>
      </div>
      <div class="chat-body">
        <div class="message bot-message">
           <img class="bot-avatar" src="\SKILLSWAP\media\bot.png" alt="chatbotlogo"></img>
          <div class="message-text">Hey There 👋<br/>How can I help you today?</div>
        </div>
      </div>
        <div class="chat-footer">
        <form action="#" class="chat-form">
          <textarea placeholder="Message..." class="message-input"></textarea>
          <div class="chat-controls">
            <button type="button" class="material-symbols-outlined"> sentiment_satisfied </button>
            <button type="button" class="material-symbols-outlined"> attach_file </button>
            <button type="submit"  class="material-symbols-outlined"> arrow_upward </button>
          </div>
        </form>
      </div>
      
    </section>
    </div>
  );
}
