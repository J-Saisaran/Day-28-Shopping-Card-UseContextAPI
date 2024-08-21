import React, { createContext, useState, useEffect, useContext } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Load cart items from local storage when the component mounts
  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems"));
    if (storedCartItems) {
      setCartItems(storedCartItems);
    }
  }, []);

  // Save cart items to local storage whenever cartItems changes
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    const existingProduct = cartItems.find((item) => item.id === product.id);
    if (existingProduct) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    const existingProduct = cartItems.find((item) => item.id === productId);

    if (existingProduct && existingProduct.quantity > 1) {
      setCartItems(
        cartItems.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
    } else {
      setCartItems(cartItems.filter((item) => item.id !== productId));
    }
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
