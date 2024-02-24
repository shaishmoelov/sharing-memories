import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import './LandingPage.css'; // Ensure you link the CSS file for styles

function LandingPage() {
  return (
    <div className="landing-container">
      <section id="home" className="landing-section">
        <div className="content">
          <img src="/images/logo.webp" alt="Business Logo" className="logo" />
          <h1>Business Headline</h1>
          <p>A short and engaging sentence about your business.</p>
          <div className="buttons">
            <Link to="/signin"><button className="button">Sign In</button></Link>
            <Link to="/signup"><button className="button">Sign Up</button></Link>
          </div>
        </div>
      </section>
      <section id="how-it-works" className="landing-section">
        <div className="content">
          <h2>How It Works</h2>
          {/* Insert your diagram or explanation here */}
        </div>
      </section>
      <section id="faq" className="landing-section">
        <div className="content">
          <h2>Frequently Asked Questions</h2>
          {/* Consider using a list or accordion for FAQs */}
        </div>
      </section>
      <section id="contact" className="landing-section">
        <div className="content">
          <h2>Contact Us</h2>
          <form>
            {/* Your contact form elements here */}
          </form>
          <p>Address: Your business address here</p>
          <a href="https://www.instagram.com/sivandaniel/">Follow us on Instagram</a>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;