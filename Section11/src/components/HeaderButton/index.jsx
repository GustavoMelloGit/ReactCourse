import React from "react";
import styles from "./HeaderButton.module.css";
import CartIcon from "../../assets/CartICon.svg";

export default function HeaderButton(props) {
  return (
    <button className={styles.button} onClick={props.onOpenCart}>
      <span>
        <img src={CartIcon} alt="Cart icon" className={styles.icon} />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>3</span>
    </button>
  );
}
