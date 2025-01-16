import { Navigate } from "react-router";

export const PrivateRoute = ({ children }) => {
  // Check if user is authenticated by looking for token
  const isAuthenticated = !!localStorage.getItem("authUser");
  // If not authenticated, redirect to login
  if (!isAuthenticated) {
    // Since we don't have react-router, we'll redirect page login
    return <Navigate to="/login" />;
  }

  // If authenticated, render children
  return <>{children}</>;
};

export const PublicRoute = ({ children }) => {
  const isAuthenticated = !!localStorage.getItem("authUser");
  return !isAuthenticated ? <>{children}</> : <Navigate to="/" />;
};
