import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { editExpense, removeExpense } from "../actions/expenses";
export const EditExpensePage = props => {
  const onFromSubmit = date => {
    props.editExpense(props.expense.id, date);
    props.history.push("/");
  };

  const onExpenseDelete = () => {
    props.removeExpense(props.expense.id);
    props.history.push("/");
  };

  if (props.expense) {
    return (
      <div>
        <ExpenseForm onSubmit={onFromSubmit} expense={props.expense} />
        <button onClick={onExpenseDelete}>Remove</button>
      </div>
    );
  } else {
    return (
      <div>
        <p>There is no expense </p>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  const idParam = ownProps.match.params.id;
  const filter = state.expenses.filter(exp => exp.id === idParam);

  return {
    expense: filter[0]
  };
};

export default connect(mapStateToProps, { editExpense, removeExpense })(
  EditExpensePage
);
