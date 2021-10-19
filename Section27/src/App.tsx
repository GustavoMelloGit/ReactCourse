import classes from "./App.module.css";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <div className={classes.container}>
      <NewTodo />
      <Todos />
    </div>
  );
}

export default App;
