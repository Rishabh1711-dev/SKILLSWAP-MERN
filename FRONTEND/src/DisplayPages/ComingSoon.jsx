import React, { useState, useEffect } from "react";
import "../styles/ComingSoon.css";

const ComingSoon = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date("2025-10-31T00:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference < 0) {
        clearInterval(interval);
      } else {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="coming-soon-container">
      <h1>🚀 Coming Soon</h1>
      <p>Our website is under construction. Stay tuned!</p>

      <div className="countdown">
        <div>
          <span>{timeLeft.days}</span>
          <small>Days</small>
        </div>
        <div>
          <span>{timeLeft.hours}</span>
          <small>Hours</small>
        </div>
        <div>
          <span>{timeLeft.minutes}</span>
          <small>Minutes</small>
        </div>
        <div>
          <span>{timeLeft.seconds}</span>
          <small>Seconds</small>
        </div>
      </div>

      <div className="subscribe">
        <input type="email" placeholder="Enter your email" />
        <button>Notify Me</button>
      </div>
    </div>
  );
};

export default ComingSoon;
