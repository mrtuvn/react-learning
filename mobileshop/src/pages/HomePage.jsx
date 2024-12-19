import React, { useEffect, useState } from "react";
import ProductList from "../components/Products/ProductList";
import Banner from "../components/Banner";
//import BlogList from "../components/Blog/BlogList";
import PopularProduct from "../components/ProductFeeds/popular-product";
import NewProduct from "../components/ProductFeeds/new-product";

function HomePage() {
  const [products, setProducts] = useState([]);
  const [mode, setMode] = useState("grid");
  //const [posts, setPosts] = useState([]);

  // Gọi API khi component được mount
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://dummyjson.com/products?limit=10");
      if (!response.ok) {
        throw new Error("Unable to download data");
      }
      const data = await response.json();
      setProducts(data.products);
    };
    fetchProducts();
  }, []);

  // useEffect(() => {
  //     const fetchPosts = async () => {
  //         const response = await fetch('https://dummyjson.com/posts?limit=8');
  //         if (!response.ok) {
  //             throw new Error('Unable to download data');
  //         }
  //         const data = await response.json();
  //         setPosts(data.posts);
  //     };
  //     fetchPosts();
  // }, []);

  return (
    <>
      <Banner />

      <div className="container">
        <NewProduct />
      </div>

      <div className="container">
        {products.length > 0 && (
          <>
            <div className="heading">List of products</div>
            <ProductList modes={mode} products={products} />
          </>
        )}

        {/* {posts.length > 0 && (
                    <>
                        <div className="heading">Posts</div>
                        <BlogList posts={posts}/>
                    </>
                )} */}
      </div>

      <div className="container">
        <PopularProduct />
      </div>
    </>
  );
}

export default HomePage;
