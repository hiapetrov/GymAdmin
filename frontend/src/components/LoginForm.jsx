
import React from 'react';

const LoginForm = () => {
  return (
    <div className="login-container">
      <div className="left-part">
        {/* Display images or content on the left part */}
      </div>
      <div className="right-part">
        <h2>Welcome!</h2>
        <form className="login-form">
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" name="email" />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />

          <div className="remember-me">
            <input type="checkbox" id="remember" name="remember" />
            <label htmlFor="remember">Remember me</label>
          </div>

          <button className="login-button">Login</button>
        </form>
        <p className="forgot-password">Forgot password?</p>
      </div>
    </div>
  );
};

export default LoginForm;
