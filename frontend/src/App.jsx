// App.js
import React, { useState } from 'react';
import Header from './components/Header.jsx';
import Story from './components/Story.jsx';
import Login from './components/LoginForm.jsx';
import SignUp from './components/SingupForm.jsx';

const App = () => {
  const [authState, setAuthState] = useState(0); // 0 for carousel, 1 for login, 2 for signup


  return (
    <div>
      <Header
        setAuthState={setAuthState}
        authState={authState}
      />
      {authState === 0 && <Story />}
      {authState === 1 && <Login />}
      {authState === 2 && <SignUp />}
    </div>
  );
};

export default App;
