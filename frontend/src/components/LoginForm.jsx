import React, { useState } from 'react';

const LoginForm = ({ setAuthState, setUserData }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/v1/users/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.status === 200) {
        // Successfully logged in
        setAuthState(3); // Set authState to 3 (dashboard mode)
        setUserData(data); // Pass the user data to the parent component
      } else {
        // Display error and set authState to 4 (error mode)
        setError(data); // Assuming the server sends the error message as JSON
        setAuthState(4);
      }
    } catch (error) {
      console.error('Error while logging in:', error);
      setError({ error: 'An error occurred while logging in.' });
      setAuthState(4);
    }
  };

  return (
    <div className="login-container">
      <div className="left-part">
        {/* Display images or content on the left part */}
      </div>
      <div className="right-part">
        <h2>Welcome!</h2>
        <form className="login-form" onSubmit={handleLogin}>
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="remember-me">
            <input type="checkbox" id="remember" name="remember" />
            <label htmlFor="remember">Remember me</label>
          </div>

          <button className="login-button" type="submit">
            Login
          </button>
        </form>
        <p className="forgot-password">Forgot password?</p>
      </div>
    </div>
  );
};

export default LoginForm;
