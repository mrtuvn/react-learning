// src/api.ts
const API_URL = "https://dummyjson.com";
// Hàm fetch Categories dữ liệu từ API
export const fetchAllCategories = async () => {
  // Fetch all categories
  const response = await fetch(`${API_URL}/products/categories`);
  if (!response.ok) throw new Error("Network response was not ok");
  const categories = await response.json();

  return categories;
};
