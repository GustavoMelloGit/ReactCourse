import React, { useState } from "react";
import Header from "./components/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart";

function App() {
  const [cart, setCart] = useState(false);

  function handleCloseCart() {
    setCart(false);
  }
  function handleOpenCart() {
    setCart(true);
  }
  return (
    <>
      {cart && <Cart onClose={handleCloseCart} />}
      <Header onOpenCart={handleOpenCart} />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
