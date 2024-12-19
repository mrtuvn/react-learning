// Hàm fetch Categories dữ liệu từ API
export const fetchUserAddress = async (id) => {
  const API_URL = "https://dummyjson.com";

  // Fetch UserAddress
  const response = await fetch(`${API_URL}/users/${id}`);
  if (!response.ok) throw new Error("Network response was not ok");
  const userAddress = await response.json();

  return userAddress;
};
