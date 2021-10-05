import React from "react";
import Card from "../Card";
import User from "../User";
import styles from "./ListUser.module.css";

export default function ListUser(props) {
  return (
    <Card>
      {props.users.map((element) => (
        <User name={element.name} year={element.year} />
      ))}
    </Card>
  );
}
