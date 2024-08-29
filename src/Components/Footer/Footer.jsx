import React, { useState } from 'react';
import './Footer.css'
import message from '../../assets/msg-icon.png'
import mail from '../../assets/mail-icon.png'
import location from '../../assets/location-icon.png'
import phone from '../../assets/phone-icon.png'
import logooo from '../../assets/ropo.svg'
const Footer = () => {
    const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleSubmit = () => {
    if (isChecked) {
      alert('Thank you! You are not a robot.');
    } else {
      alert('Please confirm you are not a robot.');
    }
  };
  return (
    <div>
        <div className="footer_title">
        <p cla>Contact Us</p>
        <h1>Get in Touch</h1>
        </div>
      <div className="footer">
        <div className="Contact">
            <h3>Send us a message
                <img src={message} alt="" />
            </h3>
            <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
            <ul>
                <li><img src={mail} alt="" />Contact@GreatStack.dev</li>
                <li><img src={phone} alt="" />+1 123-456-7890</li>
                <li><img src={location} alt="" />77 Massachusetts Ave, Cambridge
                MA 02139, United States</li>
            </ul>
        </div>
        <div className="texting">
        <p>Your Name</p>
        <input type="text" placeholder='Enter Your Name' />
        <p>Phone Number</p>
        <input type="number" placeholder='Enter your mopile number' />
        <p>Your Email</p>
        <input type="text" placeholder='Enter your email address' />
        <p>Write your messages here</p>
        <input type="text" placeholder='Write your messages here' />
        <div className="captcha-container">
        <label className="captcha-label">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            className="captcha-checkbox"
          />
          <span className="captcha-text">I am human</span>
        </label>
        <img src={logooo} alt="hCaptcha" className="hcaptcha-image" />
      </div>
      <button className="submit-button" onClick={handleSubmit}>
        Submit now <span className="arrow">→</span>
      </button>
        </div>
      </div>
      
    </div>
  )
}

export default Footer
