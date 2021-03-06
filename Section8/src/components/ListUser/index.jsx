import React from "react";
import Card from "../Card";
import User from "../User";

export default function ListUser(props) {
  return (
    <Card>
      <ul>
        {props.users.map((element) => (
          <User name={element.name} year={element.age} key={element.id} />
        ))}
      </ul>
    </Card>
  );
}
