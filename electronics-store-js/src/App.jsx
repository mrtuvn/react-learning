import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import SearchProduct from "./components/SearchProduct";
import ProductItem from "./components/ProductItem";
import AppRootContext from "./contexts/AppRootContext";
import ProductList from "./components/ProductList";

/*

Implement a feature where clicking on a Title from the list immediately triggers a fetch request for their details
However, if another Title is clicked before the previous request is abort, ensure that only the details for the most recently clicked title are displayed.
Sort by column (ASC, DESC)
Search by title
Just show the most recently product

*/

/*
http://localhost:5173/product/1 product details
http://localhost:5173/products list product
http://localhost:5173/login -> login/register (auth)

*/

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ProductDetails from "./components/ProductDetails";
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppRootContext>
        <div className="card">
          <h2 className="mb-2 text-lg font-semibold text-gray-900">Demo</h2>

          <SearchProduct />

          <ProductList />

          <br />

          <ProductDetails />
        </div>
      </AppRootContext>
    </QueryClientProvider>
  );
}

export default App;
