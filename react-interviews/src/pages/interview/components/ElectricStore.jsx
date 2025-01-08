import React, { useState, useMemo, useEffect } from "react";
import { useDebounce } from "../../../hooks/useDebounce";
const HEADERS = ["title", "brand", "stock", "price"];

const DIRECTION = {
  DEFAULT: "DEFAULT",
  ASC: "ASC",
  DESC: "DESC",
};

const fetchSortHeader = () => {
  return HEADERS.reduce((acc, cur) => {
    acc[cur] = DIRECTION.DEFAULT;
    return acc;
  }, {});
};

const ElectricStore = () => {
  console.log(fetchSortHeader);

  const [product, setProduct] = useState(null);
  const [productId, setProductId] = useState(null);
  const [textSearch, setTextSearch] = useState("");
  const [dataSource, setDataSource] = useState([]);
  const [sortDirection, setSortDirection] = useState(fetchSortHeader);
  const debounced = useDebounce(textSearch, 500);

  const handleSearch = (e) => {
    setTextSearch(e.target.value);
  };
  const handleViewDetail = (id) => {
    setProductId(id);
  };

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=5")
      .then((res) => res.json())
      .then((data) => setDataSource(data.products));
  }, []);

  useEffect(() => {
    if (!productId) return;
    const abortController = new AbortController();

    setTimeout(() => {
      fetch(`https://dummyjson.com/product/${productId}`, {
        signal: abortController.signal,
      })
        .then((res) => res.json())
        .then((data) => setProduct(data));
    }, 500);

    return () => {
      if (abortController) abortController.abort();
    };
  }, [productId]);

  const dataTable = useMemo(() => {
    return dataSource.filter((data) =>
      data.title.toLowerCase().includes(debounced.toLowerCase())
    );
  }, [dataSource, debounced]);

  const toggleSort = (header) => {
    const currentDirection = sortDirection[header];
    const isAsc =
      currentDirection === DIRECTION.DEFAULT ||
      currentDirection === DIRECTION.ASC;

    //sort table
    const newDataSource = dataTable.sort((a, b) => {
      const partA = a[header];
      const partB = b[header];

      if (isAsc) {
        if (partA > partB) return -1;
        if (partA < partB) return 1;
        return 0;
      } else {
        if (partA > partB) return 1;
        if (partA < partB) return -1;
        return 0;
      }
    });
    setDataSource(newDataSource);

    //set next direction
    const nextDirection = isAsc ? DIRECTION.DESC : DIRECTION.ASC;
    setSortDirection((prevState) => ({
      ...prevState,
      [header]: nextDirection,
    }));
  };

  return (
    <div>
      <h2 className="mb-2 text-lg font-semibold text-gray-900 flex items-center">
        Requirements{" "}
        <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded ml-2">
          Hard
        </span>
      </h2>
      <div className="text-gray-500">
        Implement a feature where clicking on a <b>Title</b> from the list
        immediately triggers a fetch request for their details. However, if
        another Title is clicked before the previous request is abort, ensure
        that only the details for the most recently clicked title are displayed.
      </div>
      <ul className="pl-10 text-gray-500 list-disc mt-4">
        <li>Sort by column (ASC, DESC)</li>
        <li>Search by title</li>
        <li>Just show the most recently product</li>
      </ul>
      <br />
      <div>
        <b>Notes:</b>{" "}
        <span className="text-gray-500">Don't use 3rd library.</span>
      </div>
      <br />
      <h4 className="mb-2 text-lg font-semibold text-gray-900">API</h4>
      <div className="space-y-1 text-gray-500 list-disc list-inside">
        <ul className="space-y-1 text-gray-500 list-disc list-inside mt-5  ml-5">
          <li>
            Get products list:{" "}
            <a
              href="https://dummyjson.com/products?limit=5"
              target="_blank"
              className="font-medium text-blue-600 underline"
            >
              https://dummyjson.com/products?limit=5
            </a>
          </li>
          <li>
            Get job detail:{" "}
            <a
              href="https://dummyjson.com/product/2"
              target="_blank"
              className="font-medium text-blue-600 underline"
            >
              https://dummyjson.com/product/2
            </a>
          </li>
        </ul>
      </div>
      <br />
      <hr />
      <br />
      <h2 className="mb-2 text-lg font-semibold text-gray-900">Demo</h2>
      <div className="mt-4 flex justify-end items-center">
        <label className="mr-2">Search:</label>
        <input
          type="text"
          id="small-input"
          onChange={handleSearch}
          className="block p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div className="relative overflow-x-auto mt-4">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              {HEADERS.map((header) => (
                <th
                  key={header}
                  scope="col"
                  className="px-6 py-3 cursor-pointer"
                  onClick={() => toggleSort(header)}
                >
                  <div className="flex justify-between">{header}</div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {dataTable.map((data) => (
              <tr key={data.id} className="bg-white border-b">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-[#0060FD] cursor-pointer"
                  onClick={() => handleViewDetail(data.id)}
                >
                  {data.title}
                </th>
                <td className="px-6 py-4">{data.brand}</td>
                <td className="px-6 py-4">{data.stock}</td>
                <td className="px-6 py-4">{data.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <br />
      <h3 className="font-bold">Product detail</h3>
      <br />
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
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-[#0060FD]"
            >
              {product?.id || "N/A"}
            </th>
            <td className="px-6 py-4">{product?.title || "N/A"}</td>
            <td className="px-6 py-4">{product?.brand || "N/A"}</td>
          </tr>
        </tbody>
      </table>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default ElectricStore;
