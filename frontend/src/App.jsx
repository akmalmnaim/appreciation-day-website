// src/App.jsx
import React, { useState } from "react";
import Login from "./components/Login";
import Voting from "./components/Voting";
import Success from "./components/Success";

const App = () => {
  const [username, setUsername] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isVotingSuccessful, setIsVotingSuccessful] = useState(false);

  const handleLogin = (user) => {
    setUsername(user);
    setIsLoggedIn(true);
  };

  const handleVoteSuccess = () => {
    setIsVotingSuccessful(true);
  };

  const handleBackToLogin = () => {
    setIsVotingSuccessful(false);
    setIsLoggedIn(false);
    setUsername("");
  };

  return <div>{isVotingSuccessful ? <Success username={username} onBackToLogin={handleBackToLogin} /> : isLoggedIn ? <Voting onVoteSuccess={handleVoteSuccess} username={username} /> : <Login onLogin={handleLogin} />}</div>;
};

export default App;
