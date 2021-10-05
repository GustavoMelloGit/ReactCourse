import React, { useState } from "react";
import "./Expenses.css";

import Card from "../UI/Card";
import ExpensesList from "../ExpensesList";
import ExpensesChart from "../ExpensesChart/index";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2021");
  function filteringYear(e) {
    setFilterYear(e.target.value);
  }
  const filteredItems = props.items.filter((expense) => {
    if (filterYear !== "all") {
      return expense.date.getFullYear().toString() === filterYear;
    } else return expense;
  });
  return (
    <Card className="expenses">
      <div id="filter__wrapper">
        <span>Filter by year</span>
        <select
          name="selectFilter"
          id="selectFilterYear"
          onChange={filteringYear}
          defaultValue="2021"
        >
          <option value="all">All expenses</option>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
        </select>
      </div>
      <ExpensesChart expenses={filteredItems} />
      <ExpensesList items={filteredItems} filtered={filterYear} />
    </Card>
  );
};

export default Expenses;
