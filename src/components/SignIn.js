import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AuthForm.css'; // Assuming a shared CSS file for auth forms

function SignIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const hashedPassword = btoa(password); // Simple base64 encoding
    const storedUserData = localStorage.getItem(username);
    const userData = storedUserData ? JSON.parse(storedUserData) : null;

    if (userData && userData.password === hashedPassword) {
      // Correct credentials, navigate to the gallery or another page
      navigate(`/gallery/someEventId`); // Adjust the navigation as needed
    } else {
      // Incorrect credentials
      alert('Invalid username or password.');
    }
  };

  return (
    <div className="auth-form-container">
      <h2 className="form-title">Sign In to Access Your Gallery</h2>
      <form onSubmit={handleSubmit} className="auth-form">
        <div className="form-group">
          <label htmlFor="username" className="input-label">Username:</label>
          <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} className="text-input" required />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="input-label">Password:</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="text-input" required />
        </div>
        <button type="submit" className="submit-button">Sign In</button>
      </form>
    </div>
  );
}

export default SignIn;