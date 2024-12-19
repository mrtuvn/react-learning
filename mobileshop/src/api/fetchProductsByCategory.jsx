// Hàm fetch Categories dữ liệu từ API
export const fetchProductsByCategory = async (category, page, limit) => {
  const API_URL = "https://dummyjson.com";
  const skip = (page - 1) * limit;
  const response = await fetch(
    `${API_URL}/products/category/${category}?limit=${limit}&skip=${skip}`,
  );
  if (!response.ok) throw new Error("Network response was not ok");
  const data = await response.json();

  return data;
};
