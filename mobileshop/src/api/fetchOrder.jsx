// Hàm fetch Categories dữ liệu từ API
export const fetchOrder = async (id) => {
  const API_URL = "https://dummyjson.com";

  // Fetch Order
  const response = await fetch(`${API_URL}/c/cfb2-e68a-4641-b6ce`);
  if (!response.ok) throw new Error("Network response was not ok");
  return await response.json();
};
