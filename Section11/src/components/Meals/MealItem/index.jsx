import React, { useContext, useState } from "react";
import CartContext from "../../../context/CartContext";
import styles from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

export default function MealItem(props) {
  const [value, setValue] = useState(1);
  const cart = useContext(CartContext);

  function handleAddToCart(e) {
    e.preventDefault();
    cart.addItem(props.item, value);
  }

  function handleChangeAmount(e) {
    setValue(e.target.value);
  }

  const price = `$${props.price}`;
  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>{price}</div>
      </div>
      <div>
        <MealItemForm
          handleAddToCart={handleAddToCart}
          id={props.id}
          handleChangeAmount={handleChangeAmount}
          value={value}
        />
      </div>
    </li>
  );
}
