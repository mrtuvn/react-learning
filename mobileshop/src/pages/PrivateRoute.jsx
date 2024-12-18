import React from "react";
import { Navigate } from "react-router";
import { useUser } from "../components/LoginPage/UserContext";

const PrivateRoute = ({ children }) => {
  const { user } = useUser();

  // If the user is not authenticated, redirect to the login page
  if (!user.id) {
    return <Navigate to="/login" />;
  }

  // If the user is authenticated, render the children (protected component)
  return children;
};

export default PrivateRoute;
