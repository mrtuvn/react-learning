import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import ProductList from "../components/Products/ProductList";
import Breadcrumbs from "../components/Common/Breadcrumbs";

function ProductSearch() {
  const { search } = useParams(); // Lấy ID sản phẩm từ URL
  const navigate = useNavigate();
  const [mode, setMode] = useState("list");
  const [products, setProducts] = useState(null);

  const [searchQuery, setSearchQuery] = useState(search);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        `https://dummyjson.com/products/search?q=${search}`,
      );
      const data = await response.json();
      setProducts(data.products);
    };

    fetchProducts();
  }, [search]);

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search/${searchQuery.trim()}`); // Navigate to search results page with query
    }
  };

  if (!products) {
    return (
      <div className="container" style={{ paddingTop: "30px" }}>
        <p>No products found for "{search}".</p>
      </div>
    );
  }

  return (
    <div className="search-page">
      <Breadcrumbs page={`Search: "${search}"`} />

      <div className="container">
        <form className="search-form flex" onSubmit={handleSearchSubmit}>
          <div className="form">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="What can we help you find today?"
            />

            {searchQuery !== "" && (
              <button className="btn-delete" onClick={() => setSearchQuery("")}>
                delete
              </button>
            )}
          </div>

          <button className="submit btn-red">Search</button>
        </form>

        {products.length > 0 ? (
          <>
            <div className="toolbar-products">
              <div className="count">{products.length} Result(s)</div>
            </div>

            <ProductList modes={mode} products={products} />
          </>
        ) : (
          <h2 style={{ fontWeight: "normal", fontSize: "30px" }}>
            We are sorry, your search did not return any results on our site.
          </h2>
        )}
      </div>
    </div>
  );
}

export default ProductSearch;
