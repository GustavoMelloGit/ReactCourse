import React, { useState } from "react";
import Button from "../Button";
import Card from "../Card";
import ErrorModal from "../ErrorModal";
import Input from "../Input";
import styles from "./Form.module.css";

export default function Form(props) {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [showModal, setShowModal] = useState(false);

  function handleChangeName(e) {
    setName(e.target.value);
  }
  function handleChangeAge(e) {
    setAge(e.target.value);
  }
  function resetInputs() {
    setName("");
    setAge(0);
  }
  function handleCloseModal() {
    setShowModal(false);
  }
  function verifyInputUser() {
    if (!name || !age) return false;
    else return true;
  }
  function handleAddUser(e) {
    e.preventDefault();
    if (verifyInputUser()) {
      const userInputData = {
        name: name,
        age: age,
        id: Math.random() * 10,
      };
      props.saveAddedUser(userInputData);
      resetInputs();
    } else setShowModal(true);
  }

  return (
    <div className={styles.container}>
      <ErrorModal
        title="An error occurred"
        message="It looks like you just did something wrong"
        showModal={showModal}
        onClick={handleCloseModal}
      />
      <Card>
        <form onSubmit={handleAddUser} className={styles.form}>
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
    </div>
  );
}
