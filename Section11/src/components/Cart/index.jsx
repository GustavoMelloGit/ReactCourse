import styles from "./Cart.module.css";
import Modal from "../Modal";
export default function Cart(props) {
  const cartItens = (
    <ul className={styles.cart_items}>
      {[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      {cartItens}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>32.62</span>
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
