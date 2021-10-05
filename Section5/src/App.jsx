import React, { useState } from "react";

import NewExpense from "./components/NewExpense";
import Expenses from "./components/Expenses/Expenses";
import "./App.css";

const App = () => {
  const [expenses, setExpenses] = useState([]);

  const addExpenseHandler = (expense) => {
    setExpenses((prev) => {
      return [expense, ...prev];
    });
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      {expenses.length !== 0 ? (
        <Expenses items={expenses} />
      ) : (
        <p id="empty-expense">No expenses yet</p>
      )}
    </div>
  );
};

export default App;
