import axios from "axios";

const API_URL = import.meta.env.VITE_REACT_APP_API_URL;

export const loginAPI = async (username, password) => {
  return await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });
};

export const registerAPI = async (credentials) => {
  return await fetch(`${API_URL}/users/add`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });
};

export const forgotPasswordAPI = async (email) => {
  return await axios.post(`${API_URL}/users/add`, {
    email,
    message: "Simulated password reset request",
  });
};
