import React, { useState } from "react";
import "./styles.css";

const defaultUserInput = {
  title: "",
  amount: "",
  date: "",
};
const ExpenseForm = (props) => {
  const [userInput, setUserInput] = useState(defaultUserInput);
  const handleTitleChange = (e) => {
    setUserInput((prev) => {
      return { ...prev, title: e.target.value };
    });
  };

  const handleAmountChange = (e) => {
    setUserInput((prev) => {
      return { ...prev, amount: e.target.value };
    });
  };

  const handleDateChange = (e) => {
    setUserInput((prev) => {
      return { ...prev, date: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmitForm(userInput);
    setUserInput(defaultUserInput);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>
            Title
            <input
              type="text"
              onChange={handleTitleChange}
              value={userInput.title}
            />
          </label>
        </div>
        <div className="new-expense__control">
          <label>
            Amount
            <input
              type="number"
              onChange={handleAmountChange}
              value={userInput.amount}
            />
          </label>
        </div>
        <div className="new-expense__control">
          <label>
            Date
            <input
              type="date"
              min="2019-01-01"
              max="2022-12-31"
              onChange={handleDateChange}
              value={userInput.date}
            />
          </label>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
