import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

const Expenses = (props) => {
  const [filter, setFilter] = useState("2022");

  const onFilter = (filterData) => {
    setFilter(filterData);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filter} onSaveFilter={onFilter} />
        {props.data.map((expense) => (
          <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
