import React, { useState } from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

export const CartContextProvider = (props) => {
  const [items, setItems] = useState([]);

  function addItem(item, number) {
    setItems((prev) => {
      const updatedItems = [...prev];
      for (let i = 0; i < number; i++) updatedItems.push(item);
      return updatedItems;
    });
  }

  function removeItem(id) {
    items.forEach((item, index) => {
      if (item.id === id) items.splice(index, 1);
    });
  }

  return (
    <CartContext.Provider
      value={{
        items: items,
        totalAmount: items.length,
        addItem: addItem,
        removeItem: removeItem,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
