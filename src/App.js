import { useState } from "react";
import Expense from "./components/Expense/Expense";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const DUMMY_EXPENSES = [
    {
      id: "e0",
      title: "New Wooden Desk fake",
      amount: 450,
      date: new Date(2022, 6, 5),
    },
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 2, 13),
    },
    {
      id: "e2",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2022, 3, 23),
    },
    {
      id: "e3",
      title: "New TV ulala",
      amount: 799.49,
      date: new Date(2022, 4, 24),
    },
    {
      id: "e4",
      title: "New Wooden Desk",
      amount: 450,
      date: new Date(2022, 6, 5),
    },
    
  ];
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    // console.log(expense);
    setExpenses((prevExpense) => {
      return [expense, ...prevExpense];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expense item={expenses} />
    </div>
  );
}

export default App;
