import { useContext, useEffect, useState } from "react";
import ProductItem from "./components/ProductItem";

import Cart from "./components/Cart.jsx";
import AppContext, { AppProvider } from "./contexts/AppContext.jsx";

function App() {
  const data = useContext(AppProvider);
  console.log(data);
  return (
    <>
      <AppContext>
        <div className="mainContent">
          <div className="card">
            <div className="cardTop">
              <img
                alt="icon-nike"
                src="https://cdn-icons-png.flaticon.com/512/732/732084.png"
              />
            </div>

            <div className="cardTitle">Our Products</div>

            <div className="cardBody">
              {data?.map((item) => (
                <ProductItem key={item.id} item={item} />
              ))}
            </div>
          </div>

          {/* cart */}
          <Cart />
        </div>
      </AppContext>
    </>
  );
}

export default App;
