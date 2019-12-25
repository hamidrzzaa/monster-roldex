import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from "../selectors/expenses";

export const ExpenseList = props => {
  return (
    <div>
      {props.expenses.length === 0 ? (
        <p>No Expenses</p>
      ) : (
        props.expenses.map(expense => (
          <ExpenseListItem
            key={expense.id}
            description={expense.description}
            amount={expense.amount}
            createdAt={expense.createdAt}
            id={expense.id}
          />
        ))
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return { expenses: selectExpenses(state.expenses, state.filters) };
};

export default connect(mapStateToProps)(ExpenseList);
