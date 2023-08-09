// Header.js
import React from 'react';

const Header = ({ setAuthState, authState }) => {
  const handleHomeButtonClick = () => {
    setAuthState(0);
  };

  const handleLoginButtonClick = () => {
    setAuthState(1);
  };

  const handleSignUpButtonClick = () => {
    setAuthState(2);
  };

  return (
    <header className="header">
      <div>
        <img src="../src/assets/simple-logo.png" alt="Logo" className="logo" />
      </div>
      <div className="button-container">
        {authState === 0 ? (
          <>
            <button className="button" onClick={handleLoginButtonClick}>
              Login
            </button>
            <button className="button" onClick={handleSignUpButtonClick}>
              Sign Up
            </button>
          </>
        ) : (
          <button className="button" onClick={handleHomeButtonClick}>
            Go Back
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
