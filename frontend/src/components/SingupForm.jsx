import React from 'react';

const SignupForm = () => {
  return (
    <div className="signup-container">
      <div className="left-part">
        {/* Display images or content on the left part */}
      </div>
      <div className="right-part">
        <h2>Sign Up</h2>
        <form className="signup-form">
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" name="firstName" />

          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" name="lastName" />

          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" name="email" />

          <label htmlFor="confirmEmail">Confirm Email Address</label>
          <input type="email" id="confirmEmail" name="confirmEmail" />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />

          <label htmlFor="confirmPassword">Confirm Password</label>
          <input type="password" id="confirmPassword" name="confirmPassword" />

          <button className="signup-button">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
