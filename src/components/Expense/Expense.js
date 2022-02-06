import { useState } from "react";
import Card from "../UI/Card";
import "./Expense.css";
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";
import ExpenseList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";

function Expense(props) {
  const [selectedYear, selectYear] = useState("2020");

  const selectFilterHandler = (userSelectedFilter) => {
    selectYear(userSelectedFilter);
  };

  const filteredExpense = props.item.filter(
    (expense) => expense.date.getFullYear().toString() === selectedYear
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={selectedYear}
          onSelectFilter={selectFilterHandler}
        />
        <ExpensesChart expenses={filteredExpense}/>
        <ExpenseList item={filteredExpense}/>
      </Card>
    </div>
  );
}

export default Expense;
