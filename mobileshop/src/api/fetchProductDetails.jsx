// Hàm fetch Categories dữ liệu từ API
export const fetchProductDetails = async (productId) => {
  const API_URL = "https://dummyjson.com";
  const response = await fetch(`${API_URL}/products/${productId}`);
  if (!response.ok) throw new Error("Network response was not ok");
  return response.json();
};
