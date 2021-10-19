import React, { useState } from "react";
import classes from "./App.module.css";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/todo";

function App() {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  return (
    <div className={classes.container}>
      <NewTodo addTodo={setTodoList} />
      <Todos items={todoList} />
    </div>
  );
}

export default App;
