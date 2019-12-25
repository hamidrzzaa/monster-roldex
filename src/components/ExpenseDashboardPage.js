import React from "react";
import ExpenseList from "./ExpenseList";
import ExpenseListFilter from "./ExpenseListFilters";

export const ExpenseDashboardPage = () => {
  return (
    <div>
      <ExpenseListFilter />
      <ExpenseListFilter />
    </div>
  );
};

export default ExpenseDashboardPage;
