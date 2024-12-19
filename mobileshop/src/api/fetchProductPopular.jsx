// Hàm fetch Product dữ liệu từ API
export const fetchProductPopular = async (page, limit) => {
  const API_URL = "https://dummyjson.com";
  console.log(API_URL);
  const skip = (page - 1) * limit;
  const response = await fetch(
    `${API_URL}/products?limit=${limit}&skip=${skip}`,
  );
  if (!response.ok) throw new Error("Network response was not ok");

  // Filter for popular products based on a rating threshold (e.g., 4.5 or above)
  const data = await response.json();
  const popularProducts = data.products.filter(
    (product) => product.rating >= 4,
  );
  return {
    ...data,
    products: popularProducts,
  };
};
