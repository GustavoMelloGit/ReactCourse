import classes from "./Todo.module.css";

const Todo: React.FC<{ text: string }> = (props) => {
  return <li className={classes.item}>{props.text}</li>;
};
export default Todo;
