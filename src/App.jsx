import React from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import { CartProvider } from "./context/CartContext";
import "./App.css";

const App = () => {
  return (
    <CartProvider>
      <div className="container">
        <h1 className="my-4">React Shopping Cart</h1>
        <ProductList />
        <Cart />
      </div>
    </CartProvider>
  );
};

export default App;
