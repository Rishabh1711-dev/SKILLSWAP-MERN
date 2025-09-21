import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // <-- import useNavigate
import "../styles/FindYourSkillPartner.css"; 

const ValidationPopup = ({ onClose }) => (
  <div className="popup-overlay">
    <div className="popup-content">
      <h2>Missing Information</h2>
      <p>Please tell us which skill you want to learn and which skill you can teach. These are essential for finding your perfect partner!</p>
      <button onClick={onClose} className="popup-close-btn">Got it</button>
    </div>
  </div>
);

export default function SkillSwapForm({ onFindPartner }) {
  const [formData, setFormData] = useState({
    skillToLearn: '',
    skillToTeach: '',
    availability: '',
    about: '',
    duration: ''
  });

  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate(); // <-- initialize navigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.skillToLearn.trim() !== '' && formData.skillToTeach.trim() !== '') {
      console.log("Form Submitted:", formData);
      // Redirect to coming-soon page
      navigate("/coming-soon");
    } else {
      setShowPopup(true);
    }
  };

  return (
    <>
      {showPopup && <ValidationPopup onClose={() => setShowPopup(false)} />}

      <div className="modern-page-background">
        <section className="modern-navbar">
          <h1 className="modern-logo">Skill<span>Swap</span></h1>
        </section>

        <div className="form-container">
          <div className="form-header">
            <h2>Find Your Perfect Partner</h2>
            <p>Fill in your skills below to get started. Fields with * are required.</p>
          </div>
          
          <form className="skills-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="skillToLearn">Skill You Want to Learn *</label>
              <input
                id="skillToLearn"
                className="skills-box"
                type="text"
                name="skillToLearn"
                placeholder="e.g., Python, Guitar, Public Speaking"
                value={formData.skillToLearn}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="skillToTeach">Skill You Can Teach *</label>
              <input
                id="skillToTeach"
                className="skills-box"
                type="text"
                name="skillToTeach"
                placeholder="e.g., Photoshop, Creative Writing, Yoga"
                value={formData.skillToTeach}
                onChange={handleChange}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="availability">Your Availability</label>
              <input
                id="availability"
                className="skills-box"
                type="text"
                name="availability"
                placeholder="e.g., Weekday evenings, Weekend mornings"
                value={formData.availability}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="duration">Preferred Duration</label>
              <input
                id="duration"
                className="skills-box"
                type="text"
                name="duration"
                placeholder="e.g., 3 months, Ongoing"
                value={formData.duration}
                onChange={handleChange}
              />
            </div>
            
            <button type="submit" className="submit-button">
              Find My Partner
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
