//action creators for Expense
import uuid from "uuid";

export const addExpense = ({
  description = "",
  note = "",
  amount = 0,
  createdAt = 0
} = {}) => {
  return {
    type: "ADD_EXPENSE",
    payload: { id: uuid.v4(), description, note, amount, createdAt }
  };
};

export const removeExpense = id => ({ type: "REMOVE_EXPENSE", payload: id });

export const editExpense = (id, updates) => {
  return {
    type: "EDIT_EXPENSE",
    payload: { id, updates }
  };
};
