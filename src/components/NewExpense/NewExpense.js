import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {
  const [activeForm, displayForm] = useState(false);
  const addExpenseHandler = (expense) => {
    props.onAddExpense({ id: Math.random().toString(), ...expense });
    displayForm(false);
  };

  const displayFormHandler = () => {
    displayForm(true);
  };

  const hideFormHandler = () => {
    displayForm(false);
  };

  return (
    <div className="new-expense">
      {activeForm && (
        <ExpenseForm
          onAddExpense={addExpenseHandler}
          onCancel={hideFormHandler}
        />
      )}
      {!activeForm && (
        <button onClick={displayFormHandler}>Add New Expense</button>
      )}
    </div>
  );
}

export default NewExpense;
