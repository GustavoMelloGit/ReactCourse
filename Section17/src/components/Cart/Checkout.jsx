import { useRef, useState } from "react";
import classes from "./Checkout.module.css";

const isEmpty = (value) => value.trim() === "";
const postalIsValid = (value) => value.trim().length === 8;

const Checkout = (props) => {
  const [formInputsValidty, setFormInputsValidty] = useState({
    name: true,
    street: true,
    city: true,
    postalCode: true,
  });

  const nameInput = useRef();
  const streetInput = useRef();
  const postalCodeInput = useRef();
  const cityInput = useRef();

  const confirmHandler = (e) => {
    e.preventDefault();
    const enteredName = nameInput.current.value;
    const enteredStreet = streetInput.current.value;
    const enteredPostalCode = postalCodeInput.current.value;
    const enteredCity = cityInput.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredCityIsValid = !isEmpty(enteredCity);
    const enteredPostalCodeIsValid = postalIsValid(enteredPostalCode);

    setFormInputsValidty({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      city: enteredCityIsValid,
      postalCode: enteredPostalCodeIsValid,
    });

    const formIsValid =
      enteredCityIsValid &&
      enteredNameIsValid &&
      enteredPostalCodeIsValid &&
      enteredStreetIsValid;

    if (!formIsValid) {
      return;
    }

    props.onSubmit({
      name: enteredName,
      street: enteredStreet,
      city: enteredCity,
      postalCode: enteredPostalCode,
    });
    props.onCancel();
  };

  return (
    <form onSubmit={confirmHandler}>
      <div
        className={`${classes.control} ${
          !formInputsValidty.name && classes.invalid
        }`}
      >
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" ref={nameInput} />
        {!formInputsValidty.name && <p>Please enter a valid name</p>}
      </div>
      <div
        className={`${classes.control} ${
          !formInputsValidty.street && classes.invalid
        }`}
      >
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInput} />
        {!formInputsValidty.street && <p>Please enter a valid street</p>}
      </div>
      <div
        className={`${classes.control} ${
          !formInputsValidty.postalCode && classes.invalid
        }`}
      >
        <label htmlFor="postal">Postal code</label>
        <input type="text" id="postal" ref={postalCodeInput} />
        {!formInputsValidty.postalCode && (
          <p>Please enter a valid postal code</p>
        )}
      </div>
      <div
        className={`${classes.control} ${
          !formInputsValidty.city && classes.invalid
        }`}
      >
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInput} />
        {!formInputsValidty.city && <p>Please enter a valid city</p>}
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
