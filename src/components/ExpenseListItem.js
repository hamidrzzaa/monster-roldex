import React from "react";
import { removeExpense } from "../actions/expenses";
import { Link } from "react-router-dom";
import moment from "moment";
import numeral from "numeral";
export const ExpenseListItem = props => {
  return (
    <div>
      <h3>Description: {props.description}</h3>
      <p>Amount: {numeral(props.amount).format("$0,0.00")}</p>
      <p>Created At: {moment(props.createdAt).format("MMMM Do YYYY")}</p>

      <button>
        {" "}
        <Link to={`/edit/${props.id}`}>Edit</Link>
      </button>
    </div>
  );
};

export default ExpenseListItem;
