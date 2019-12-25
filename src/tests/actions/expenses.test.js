import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

test("should return the remove obj ", () => {
  const result = removeExpense(12);
  expect(result).toEqual({ type: "REMOVE_EXPENSE", payload: 12 });
});

test("should return an obj with an id and update obj", () => {
  const result = editExpense("123abc", {
    description: "here we go",
    note: "in here"
  });
  expect(result).toEqual({
    type: "EDIT_EXPENSE",
    payload: {
      id: "123abc",
      updates: { description: "here we go", note: "in here" }
    }
  });
});

test("should set up the action obj with our data", () => {
  const result = addExpense({
    description: "fuck anashid",
    note: "this girl is ace",
    amount: "12.33",
    createdAt: "1000"
  });
  expect(result).toEqual({
    type: "ADD_EXPENSE",
    payload: {
      id: expect.any(String),
      description: "fuck anashid",
      note: "this girl is ace",
      amount: "12.33",
      createdAt: "1000"
    }
  });
});

test("should set the default value ", () => {
  const result = addExpense();
  expect(result).toEqual({
    type: "ADD_EXPENSE",
    payload: {
      id: expect.any(String),
      description: "",
      note: "",
      amount: 0,
      createdAt: 0
    }
  });
});
