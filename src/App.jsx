import { useState, useEffect } from "react";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // handle login state persistence
  useEffect(() => {
    const storedLogin = localStorage.getItem("isLoggedIn");
    if (storedLogin === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", "true");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
  };

  return (
    <div className="app-container">
      {isLoggedIn ? (
        <Dashboard onLogout={handleLogout} />
      ) : (
        <Login onLogin={handleLoginSuccess} />
      )}
    </div>
  );
};

export default App;
