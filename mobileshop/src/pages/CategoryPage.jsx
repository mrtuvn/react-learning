import React, { useState, useEffect } from "react";
import ProductList from "../components/Products/ProductList";
import CategoryList from "../components/CategoryList";
import Breadcrumbs from "../components/Common/Breadcrumbs";

function CategoryPage() {
  const [products, setProducts] = useState([]);
  const [activeBtn, setActiveBtn] = useState(null);
  const [mode, setMode] = useState("grid");

  // Gọi API khi component được mount
  useEffect(() => {
    // get list product
    const fetchProducts = async () => {
      const response = await fetch("https://dummyjson.com/products");
      if (!response.ok) {
        throw new Error("Unable to download data");
      }
      const data = await response.json();
      setProducts(data.products);
    };

    fetchProducts();
  }, []);

  // sorting
  const handleSortChange = async (sortBy, order, btnId) => {
    const response = await fetch(
      `https://dummyjson.com/products?sortBy=${sortBy}&order=${order}`,
    );
    if (!response.ok) {
      throw new Error("Unable to download data");
    }
    const data = await response.json();
    setProducts(data.products); // Lưu sản phẩm vào state
    setActiveBtn(btnId);
  };

  return (
    <React.Fragment>
      <Breadcrumbs page={"Category"} />
      <div className="category-page container">
        <div className="heading">List of categories</div>
        <CategoryList />

        <div className="heading">List of products</div>
        {products.length > 0 && (
          <>
            <div className="sorting">
              <span>Sort by:</span>
              <button
                className={`btn-default ${activeBtn === 1 ? "active" : ""}`}
                onClick={(e) => handleSortChange("title", "asc", 1)}
              >
                {"Name A -> Z"}
              </button>
              <button
                className={`btn-default ${activeBtn === 2 ? "active" : ""}`}
                onClick={(e) => handleSortChange("title", "desc", 2)}
              >
                {"Name Z -> A"}
              </button>
              <button
                className={`btn-default ${activeBtn === 3 ? "active" : ""}`}
                onClick={(e) => handleSortChange("price", "desc", 3)}
              >
                Price: highest to lowest
              </button>
              <button
                className={`btn-default ${activeBtn === 4 ? "active" : ""}`}
                onClick={(e) => handleSortChange("price", "asc", 4)}
              >
                Price: lowest to highest
              </button>
            </div>

            <ProductList modes={mode} products={products} />
          </>
        )}
      </div>
    </React.Fragment>
  );
}

export default CategoryPage;
