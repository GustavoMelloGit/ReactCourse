import React from "react";
import styles from "./MealItemForm.module.css";
import Input from "../../../Input";

export default function MealItemForm(props) {
  return (
    <form className={styles.form} onSubmit={props.handleAddToCart}>
      <Input
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          value: props.value,
          onChange: props.handleChangeAmount,
        }}
      />
      <button type="submit">+ Add</button>
    </form>
  );
}
