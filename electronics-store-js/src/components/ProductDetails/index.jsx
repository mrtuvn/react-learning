import React from "react";

const ProductDetails = ({ product }) => {
  return (
    <div>
      <h3 className="font-bold">Product detail</h3>

      <table className="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3">
              ID
            </th>
            <th scope="col" className="px-6 py-3">
              Title
            </th>
            <th scope="col" className="px-6 py-3">
              Brand
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b">
            <th
              scope="row"
              className="px-6 py-4 font-medium whitespace-nowrap text-[#0060FD]"
            >
              {product.id ? product.id : "N/A"}
            </th>
            <td className="px-6 py-4">
              {product.title ? product.title : "N/A"}
            </td>
            <td className="px-6 py-4">
              {product.brand ? product.brand : "N/A"}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProductDetails;
