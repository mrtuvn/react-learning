import React, { createContext, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router";

// Create a context for the user
const UserContext = createContext();

const getUsers = () => {
  const data = JSON.parse(localStorage.getItem("user"));
  return data ? data : [];
};

// UserProvider component to provide user data and authentication functions
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(getUsers()); // State to store user information
  const navigate = useNavigate();

  // Load user from localStorage when the app starts
  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user")); // Load user data from localStorage

    if (savedUser) {
      setUser(savedUser); // If found, set the user in the state
    }
  }, []);

  // Function to log in and save the user data to state and localStorage
  const login = (userData) => {
    setUser(userData); // Set user data in state
    localStorage.setItem("user", JSON.stringify(userData)); // Save user data to localStorage
    navigate("/admin/blog");
  };

  // Function to log out and remove user data from state and localStorage
  const logout = () => {
    setUser([]); // Clear user data from state
    localStorage.removeItem("user"); // Remove user data from localStorage
    navigate("/login");
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to access user context
export const useUser = () => useContext(UserContext);
