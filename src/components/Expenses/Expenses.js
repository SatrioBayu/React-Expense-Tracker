import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filter, setFilter] = useState("2022");

  const onFilter = (filterData) => {
    setFilter(filterData);
  };

  const filteredItems = props.data.filter((item) => {
    return item.date.getFullYear() === parseInt(filter);
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filter} onSaveFilter={onFilter} />
        <ExpensesChart expenses={filteredItems} />
        <ExpensesList data={filteredItems} />
      </Card>
    </div>
  );
};

export default Expenses;
