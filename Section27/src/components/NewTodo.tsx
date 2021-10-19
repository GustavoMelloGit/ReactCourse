import { Dispatch, FormEvent, SetStateAction, useRef } from "react";
import TodoModel from "../models/todo";
import classes from "./NewTodo.module.css";

const NewTodo: React.FC<{ addTodo: Dispatch<SetStateAction<TodoModel[]>> }> = (
  props
) => {
  const todoText = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const enteredText = todoText.current!.value;

    //Validation
    if (enteredText?.trim().length === 0) {
      alert("Digite um valor válido");
      return;
    }

    //Adding todo
    props.addTodo((prev) => [
      ...prev,
      { text: enteredText, id: new Date().toString() },
    ]);

    //Reseting input
    todoText.current!.value = "";
  };

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <label htmlFor="todo">Todo text</label>
      <input ref={todoText} id="todo" type="text" />
      <button>Add todo</button>
    </form>
  );
};
export default NewTodo;
