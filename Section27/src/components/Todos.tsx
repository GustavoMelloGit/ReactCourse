import React from "react";
import TodoModel from "../models/todo";
import Todo from "./Todo";
import classes from "./Todos.module.css";

const Todos: React.FC<{ items: TodoModel[] }> = (props) => {
  return (
    <ul className={classes.todos}>
      {props.items.map((item) => (
        <Todo key={item.id} text={item.text} />
      ))}
    </ul>
  );
};

export default Todos;
