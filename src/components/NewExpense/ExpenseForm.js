import { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [enteredTitle, updateTitle] = useState("");
  const [enteredAmount, updateAmount] = useState("");
  const [enteredDate, updateDate] = useState("");
  // const [userInput, updateUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  const titleChangeHandler = (event) => {
    updateTitle(event.target.value);
    // updateUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
    // console.log(userInput.enteredTitle);
  };
  const amountChangeHandler = (event) => {
    updateAmount(event.target.value);
    // updateUserInput((prevState) => {
    //   return { ...prevState, enteredAmount: event.target.value };
    // });
    // console.log(userInput.enteredAmount);
  };
  const dateChangeHandler = (event) => {
    updateDate(event.target.value);
    // updateUserInput((prevState) => {
    //   return { ...prevState, enteredDate: event.target.value };
    // });
    // console.log(userInput.enteredDate);
  };

  const newExpenseSubmitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    updateTitle("");
    updateAmount("");
    updateDate("");
    props.onAddExpense(expenseData);
  };

  return (
    <form onSubmit={newExpenseSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;