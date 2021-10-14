import React, { useState } from "react";
import styles from "./App.module.css";
import Form from "./components/Form";
import ListUser from "./components/ListUser";

function App() {
  const [users, setUsers] = useState([]);
  function saveAddedUser(user) {
    setUsers((prev) => {
      return [user, ...prev];
    });
  }
  return (
    <div className={styles.container}>
      <Form saveAddedUser={saveAddedUser} />
      {users.length > 0 ? (
        <ListUser users={users} />
      ) : (
        <p className={styles.noUser}>No user registered</p>
      )}
    </div>
  );
}

export default App;
