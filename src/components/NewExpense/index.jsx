import React from "react";
import ExpenseForm from "../ExpenseForm";
import "./style.css";

const NewExpense = (props) => {
  const saveExpenseData = (data) => {
    const expenseData = {
      ...data,
      id: Math.ceil(Math.random() * 10).toString(),
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
