import React, { useState } from "react";
import TodoModel from "../models/todo";

interface TodoContextProps {
  items: TodoModel[];
  addTodo: (todo: TodoModel) => void;
  removeTodo: (id: string) => void;
}

const DEFAULT_VALUE = {
  items: [],
  addTodo: (todo: TodoModel) => {},
  removeTodo: (id: string) => {},
};

export const TodoContext = React.createContext<TodoContextProps>(DEFAULT_VALUE);

const TodoContextProvider: React.FC = (props) => {
  const [todoList, setTodoList] = useState<TodoModel[]>([]);

  const handleAddTodo = (todo: TodoModel) => {
    setTodoList((prev) => [...prev, todo]);
  };

  const handleRemoveTodo = (id: string) => {
    setTodoList((prev) => {
      return prev.filter((todo) => todo.id !== id);
    });
  };

  const contextValue: TodoContextProps = {
    items: todoList,
    addTodo: handleAddTodo,
    removeTodo: handleRemoveTodo,
  };

  return (
    <TodoContext.Provider value={contextValue}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
