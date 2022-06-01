import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isClicked, setIsClicked] = useState(false);

  const onSaveExpense = (expense) => {
    const expenseData = {
      id: `${Math.random()}`,
      ...expense,
    };
    props.onAddExpenseData(expenseData);
  };

  const handleClick = () => {
    setIsClicked(true);
  };

  const handleClose = () => {
    setIsClicked(false);
  };

  let content = (
    <button type="button" onClick={handleClick}>
      Add New Expense
    </button>
  );

  if (isClicked == true) {
    content = <ExpenseForm onSaveExpenseData={onSaveExpense} onClose={handleClose} />;
  }

  return <div className="new-expense">{content}</div>;
};

export default NewExpense;
