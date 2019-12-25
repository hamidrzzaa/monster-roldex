import React from "react";
import ExpenseForm from "./ExpenseForm";
import { connect } from "react-redux";
import { addExpense } from "../actions/expenses";

export const AddExpensePage = props => {
  const onSubmit = data => {
    props.addExpense(data);
    props.history.push("/");
  };
  return (
    <div>
      <h1>Add Expense</h1>
      <ExpenseForm onSubmit={onSubmit} />
    </div>
  );
};

// const mapDispatchToProps = dispatch => ({
//   addExpense: data => dispatch(addExpense(data))
// });

export default connect(null, { addExpense })(AddExpensePage);
