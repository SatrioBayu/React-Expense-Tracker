import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const onSaveExpense = (expense) => {
    const expenseData = {
      ...expense,
      id: `e${Math.round(Math.random() * 10).toString()}`,
    };
    props.onAddExpenseData(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={onSaveExpense} />
    </div>
  );
};

export default NewExpense;
