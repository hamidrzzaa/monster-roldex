import React from "react";
import ExpenseList from "./ExpenseList";
import ExpenseListFilter from "./ExpenseListFilters";
import ExpenseSummery from "./ExpenseSummery";

export const ExpenseDashboardPage = () => {
    return (
        <div>
            <ExpenseListFilter/>
            <ExpenseSummery/>
            <ExpenseList/>
        </div>
    );
};

export default ExpenseDashboardPage;
