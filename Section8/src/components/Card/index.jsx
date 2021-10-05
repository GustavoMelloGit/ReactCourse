import React from "react";
import Button from "../Button";
import Input from "../Input";
import styles from "./Card.module.css";

export default function Card() {
  function handleAddUser() {}
  return (
    <div className={styles.card}>
      <Input text="Username" type="text" />
      <Input text="Age (Years)" type="number" />
      <Button text="Add User" onClick={handleAddUser} />
    </div>
  );
}
