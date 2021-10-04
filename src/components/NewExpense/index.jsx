import React from "react";
import ExpenseForm from "../ExpenseForm";
import "./style.css";

const NewExpense = (props) => {
  const saveExpenseData = (data) => {
    const expenseData = {
      ...data,
      id: Math.ceil(Math.random()).toString(),
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSubmitForm={saveExpenseData} />
    </div>
  );
};
export default NewExpense;
