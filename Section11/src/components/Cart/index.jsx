import React, {useContext} from "react";
import styles from "./Cart.module.css";
import Modal from "../Modal";
import CartContext from "../../context/CartContext";


export default function Cart(props) {
  const cart = useContext(CartContext);
  let totalPrice = 0;
  const cartItens = cart.items.map((item)=>{
    totalPrice += item.price
    return <li key={Math.random()} className={styles.cart_items}>{item.name}</li>
  }
  );

  function formatPrice(){
    if(totalPrice<10) return `$0${totalPrice}`
    else return totalPrice
  }
  return (
    <Modal onClose={props.onClose}>
      {cartItens}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{formatPrice()}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles.button__alt} onClick={props.onClose}>
          Close
        </button>
        <button className={styles.button} onClick={props.onClose}>
          Order
        </button>
      </div>
    </Modal>
  );
}
