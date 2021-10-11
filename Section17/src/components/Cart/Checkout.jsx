import { useRef } from "react";
import classes from "./Checkout.module.css";

const Checkout = (props) => {
  const nameInput = useRef();
  const streetInput = useRef();
  const postalCodeInput = useRef();
  const cityInput = useRef();

  const confirmHandler = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={confirmHandler}>
      <div className={classes.control}>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" ref={nameInput} />
      </div>
      <div className={classes.control}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInput} />
      </div>
      <div className={classes.control}>
        <label htmlFor="postal">Postal code</label>
        <input type="text" id="postal" ref={postalCodeInput} />
      </div>
      <div className={classes.control}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInput} />
      </div>
      <div className={classes.actions}>
        <button onClick={props.onCancel} type="reset">
          Cancel
        </button>
        <button type="submit" className={classes.submit}>
          Confirm
        </button>
      </div>
    </form>
  );
};
export default Checkout;
