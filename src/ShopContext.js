import React, { createContext, useState } from "react";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (shoe) => {
    setCartItems([...cartItems, shoe]);
  };

  const removeFromCart = (shoeId) => {
    const updatedCartItems = cartItems.filter((shoe) => shoe.id !== shoeId);
    setCartItems(updatedCartItems);
  };

  return (
    <ShopContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;