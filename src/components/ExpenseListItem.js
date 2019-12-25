import React from "react";
import { removeExpense } from "../actions/expenses";
import { Link } from "react-router-dom";
export const ExpenseListItem = props => {
  const date = new Date(props.createdAt);

  return (
    <div>
      <h3>{props.description}</h3>
      <p>{props.amount}</p>
      <p>
        {date.getHours()}:{date.getMinutes()}
      </p>

      <button>
        {" "}
        <Link to={`/edit/${props.id}`}>Edit</Link>
      </button>
    </div>
  );
};

export default ExpenseListItem;
