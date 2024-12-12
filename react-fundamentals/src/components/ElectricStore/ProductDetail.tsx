import React, { useEffect, useState } from "react";

const ProductDetail = ({ id }) => {
  const [product, setProduct] = useState({});

  const fetchProductDetails = async (id) => {
    const res = await fetch(`https://dummyjson.com/product/${id}`);
    const data = await res.json();
    setProduct(data);
  };
  useEffect(() => {
    fetchProductDetails(id);
  }, [id]);
  return (
    <div>
      <table>
        <tr>
          <th>ID</th>
          <th>TITLE</th>
          <th>BRAND</th>
        </tr>
        <tbody>
          <tr>
            <td>{product.id}</td>
            <td>{product.title}</td>
            <td>{product.brand}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProductDetail;
