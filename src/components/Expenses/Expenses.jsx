import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2021");
  function filteringYear(e) {
    setFilterYear(e.target.value);
  }
  const expenseFiltered = props.items.map((element) => {
    if (filterYear === "all") {
      return (
        <ExpenseItem
          key={element.id}
          title={element.title}
          amount={element.amount}
          date={element.date}
        />
      );
    }
    if (filterYear === element.date.getFullYear().toString()) {
      return (
        <ExpenseItem
          key={element.id}
          title={element.title}
          amount={element.amount}
          date={element.date}
        />
      );
    }
  });
  return (
    <Card className="expenses">
      <div id="filter__wrapper">
        <span>Filter by year</span>
        <select
          name="selectFilter"
          id="selectFilterYear"
          onChange={filteringYear}
        >
          <option value="all">All expenses</option>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021" selected>
            2021
          </option>
          <option value="2022">2022</option>
        </select>
      </div>
      {expenseFiltered}
    </Card>
  );
};

export default Expenses;
