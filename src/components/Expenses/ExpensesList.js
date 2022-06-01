import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  if (props.data.length === 0) {
    return (
      <div className="expenses-list__fallback">
        <h2>No expenses</h2>
      </div>
    );
  }

  return (
    <ul className="expenses-list">
      {props.data.map((expense) => (
        <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
      ))}
    </ul>
  );
};

export default ExpensesList;
