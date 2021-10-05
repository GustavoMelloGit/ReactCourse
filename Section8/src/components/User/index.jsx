import React from "react";
import styles from "./User.module.css";

export default function User(props) {
  return (
    <li>
      <div className={styles.listContainer}>
        <span className={styles.userInfo}>
          {props.name} ({props.year} years old)
        </span>
      </div>
    </li>
  );
}
