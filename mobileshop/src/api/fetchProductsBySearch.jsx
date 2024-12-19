// Hàm fetch Categories dữ liệu từ API
export const fetchProductsBySearch = async (query, category, page, limit) => {
  const API_URL = "https://dummyjson.com";
  const skip = (page - 1) * limit;
  const response = await fetch(
    `${API_URL}/products/search?q=${encodeURIComponent(query)}&skip=${skip}&limit=${limit}`,
  );
  if (!response.ok) throw new Error("Network response was not ok");
  const data = await response.json();

  // Lọc sản phẩm theo danh mục nếu có
  return {
    ...data,
    products: category
      ? data.products.filter((p) => p.category === category)
      : data.products,
  };
};
