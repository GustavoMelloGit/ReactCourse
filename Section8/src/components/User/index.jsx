import React from "react";
import styles from "./User.module.css";

export default function User(props) {
  return (
    <li>
      <span>
        {props.name} ({props.year} years old)
      </span>
    </li>
  );
}
