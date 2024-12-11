import React, { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../../contexts/AppRootContext";

const SearchProduct = () => {
  const [searchTitle, setSearchTitle] = useState("");
  const appContextRetriever = useContext(AppContext);
  const handleSearchProductTitle = () => {
    console.log("search");
  };

  //console.log("retrieve context", appContextRetriever); //OBJECT

  return (
    <div className="mt-4 flex justify-end items-center flex-col">
      <label className="mr-2">Search:</label>
      <input
        type="text"
        id="small-input"
        placeholder="Enter product title for searching"
        onChange={handleSearchProductTitle}
        className="block p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500"
      />
      <p>context: {appContextRetriever.funcSum(1, 3)}</p>
    </div>
  );
};

export default SearchProduct;
