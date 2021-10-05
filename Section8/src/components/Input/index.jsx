import React from "react";
import styles from "./Input.module.css";

export default function Input(props) {
  return (
    <div className={styles.container}>
      <label className={styles.label}>{props.text}</label>
      <input type={props.type} className={styles.input} />
    </div>
  );
}
