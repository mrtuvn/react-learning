// src/api.ts
const API_URL = "https://dummyjson.com";
export const fetchProducts = async () => {
  const response = await fetch(`${API_URL}/products?limit=10`);
  if (!response.ok) throw new Error("Network response was not ok");
  const data = await response.json();
  return data.products;
};
