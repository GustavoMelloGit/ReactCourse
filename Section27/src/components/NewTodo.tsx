import { FormEvent, useRef, useContext } from "react";
import { TodoContext } from "../context/todo-context";
import classes from "./NewTodo.module.css";

const NewTodo: React.FC = () => {
  const todoText = useRef<HTMLInputElement>(null);
  const todoCtx = useContext(TodoContext);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const enteredText = todoText.current!.value;

    //Validation
    if (enteredText?.trim().length === 0) {
      alert("Digite um valor válido");
      return;
    }

    //Adding todo
    todoCtx.addTodo({ id: new Date().toString(), text: enteredText });

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
