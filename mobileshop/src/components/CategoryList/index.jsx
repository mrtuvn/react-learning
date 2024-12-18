import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import "./style.css";

function CategoryList() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // get list category
    const fetchCategories = async () => {
      const response = await fetch("https://dummyjson.com/products/categories");
      const data = await response.json();

      data.filter(
        (category) =>
          category.slug.includes("mobile-accessories") ||
          category.slug.includes("smartphones") ||
          category.slug.includes("tablets"),
      );

      setCategories(data);
    };

    fetchCategories();
  }, []);

  return (
    <React.Fragment>
      <ul className="categories">
        {categories.map((category, index) => (
          <li key={index}>
            <Link to={`/category/${category.slug}`}>{category.name}</Link>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
}

export default CategoryList;
