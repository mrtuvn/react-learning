import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router";
import ProductList from "../components/Products/ProductList";

function ProductByCategory() {
  const { slug } = useParams(); // Lấy ID sản phẩm từ URL
  const [products, setProducts] = useState(null);
  const [activeBtn, setActiveBtn] = useState(null);
  const [mode, setMode] = useState("grid");

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        `https://dummyjson.com/products/category/${slug}`,
      );
      const data = await response.json();
      setProducts(data.products);
    };

    fetchProducts();
  }, [slug]);

  const categoryName = slug.replace(/-/g, " ");

  // sorting
  const handleSortChange = async (sortBy, order, btnId) => {
    const response = await fetch(
      `https://dummyjson.com/products/category/${slug}?sortBy=${sortBy}&order=${order}`,
    );
    if (!response.ok) {
      throw new Error("Unable to download data");
    }
    const data = await response.json();
    setProducts(data.products);
    setActiveBtn(btnId);
  };

  if (!products) {
    return (
      <div className="container" style={{ paddingTop: "30px" }}>
        Loading...
      </div>
    );
  }

  return (
    <div className="listing">
      <div className="breadcrumbs">
        <div className="container">
          <ul>
            <li>
              <Link to="/public">Home</Link> {">"}
            </li>
            <li>
              <Link to="/category">Category</Link> {">"}
            </li>
            <li>
              <span style={{ textTransform: "capitalize" }}>
                {categoryName}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container">
        <div className="heading">
          <span style={{ textTransform: "capitalize" }}>{categoryName}</span>
        </div>
        {products.length > 0 && (
          <>
            <div className="toolbar-products flex">
              <div className="count">{products.length} Result(s)</div>
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
            </div>

            <ProductList modes={mode} products={products} />
          </>
        )}
      </div>
    </div>
  );
}

export default ProductByCategory;
