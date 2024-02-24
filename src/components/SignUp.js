import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AuthForm.css'; // Assuming a shared CSS file for auth forms

function SignUp() {
  const [formData, setFormData] = useState({
    names: '',
    email: '',
    confirmEmail: '',
    password: '',
    confirmPassword: '',
    paymentDetails: '',
    phoneNumber: '',
    desiredDate: ''
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.email !== formData.confirmEmail) {
      alert("Emails do not match.");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    // Simple base64 encoding as a placeholder for hashing
    const hashedPassword = btoa(formData.password);
    const userData = {
      username: formData.email, // Using email as username
      password: hashedPassword,
    };

    // Storing user data in local storage
    localStorage.setItem(userData.username, JSON.stringify(userData));

    // Navigate to a confirmation or another page
    navigate(`/confirm/someEventId`); // Change 'someEventId' as needed
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <div className="auth-form-container">
      <h2 className="form-title">Sign Up for Our Wedding Gallery</h2>
      <form onSubmit={handleSubmit} className="auth-form">
        <div className="form-group">
          <label htmlFor="names" className="input-label">Names מאמי the Couple:</label>
          <input type="text" id="names" name="names" value={formData.names} onChange={handleChange} className="text-input" required />
        </div>
        {/* Repeat the structure above for each form field */}
        <div className="form-group">
          <label htmlFor="email" className="input-label">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="text-input" required />
        </div>
        {/* Email Confirmation */}
        <div className="form-group">
          <label htmlFor="confirmEmail" className="input-label">Confirm Email:</label>
          <input type="email" id="confirmEmail" name="confirmEmail" value={formData.confirmEmail} onChange={handleChange} className="text-input" required />
        </div>

        {/* Password */}
        <div className="form-group">
          <label htmlFor="password" className="input-label">Password:</label>
          <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} className="text-input" required />
        </div>

        {/* Password Confirmation */}
        <div className="form-group">
          <label htmlFor="confirmPassword" className="input-label">Confirm Password:</label>
          <input type="password" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} className="text-input" required />
        </div>

        {/* Payment Details - Assuming it's a simple text input for demo */}
        <div className="form-group">
          <label htmlFor="paymentDetails" className="input-label">Payment Details:</label>
          <input type="text" id="paymentDetails" name="paymentDetails" value={formData.paymentDetails} onChange={handleChange} className="text-input" />
        </div>

        {/* Phone Number */}
        <div className="form-group">
          <label htmlFor="phoneNumber" className="input-label">Phone Number:</label>
          <input type="tel" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} className="text-input" required />
        </div>

        {/* Desired Date */}
        <div className="form-group">
          <label htmlFor="desiredDate" className="input-label">Desired Date:</label>
          <input type="date" id="desiredDate" name="desiredDate" value={formData.desiredDate} onChange={handleChange} className="text-input" required />
        </div>
        {/* Couple Image*/}
        <div className="form-group">
          <label htmlFor="desiredDate" className="input-label">Couple Image</label>
          <input type="date" id="desiredDate" name="desiredDate" value={formData.desiredDate} onChange={handleChange} className="text-input" required />
        </div>

        {/* Include other fields... */}
        <button type="submit" className="submit-button">Sign Up</button>
      </form>
    </div>
  );
}






    /*<div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="names">Names of the Couple:</label>
          <input type="text" id="names" value={formData.names} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="confirmEmail">Confirm Email:</label>
          <input type="email" id="confirmEmail" value={formData.confirmEmail} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" value={formData.password} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input type="password" id="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="paymentDetails">Payment Details:</label>
          <input type="text" id="paymentDetails" value={formData.paymentDetails} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input type="tel" id="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="desiredDate">Desired Date:</label>
          <input type="date" id="desiredDate" value={formData.desiredDate} onChange={handleChange} required />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}*/

export default SignUp;
