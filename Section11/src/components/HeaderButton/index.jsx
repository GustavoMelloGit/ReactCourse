import React, { useContext } from "react";
import styles from "./HeaderButton.module.css";
import CartIcon from "../../assets/CartICon.svg";
import CartContext from "../../context/CartContext";

export default function HeaderButton(props) {
  const cart = useContext(CartContext);

  return (
    <button className={styles.button} onClick={props.onOpenCart}>
      <span>
        <img src={CartIcon} alt="Cart icon" className={styles.icon} />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{cart.totalAmount}</span>
    </button>
  );
}
