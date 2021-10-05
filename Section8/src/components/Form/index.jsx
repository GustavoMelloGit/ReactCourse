import React, { useState } from "react";
import Button from "../Button";
import Card from "../Card";
import Input from "../Input";

export default function Form() {
  const [users, setUsers] = useState([{}]);
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  function handleChangeName(e) {
    setName(e.target.value);
  }
  function handleChangeAge(e) {
    setAge(e.target.value);
  }
  function handleAddUser(e) {
    e.preventDefault();
  }
  return (
    <Card>
      <form onSubmit={handleAddUser}>
        <Input
          text="Username"
          type="text"
          onChange={handleChangeName}
          value={name}
        />
        <Input
          text="Age (Years)"
          type="number"
          onChange={handleChangeAge}
          value={age}
        />
        <Button text="Add User" type="submit" />
      </form>
    </Card>
  );
}
