import expenseReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses";

test("should to see default state to be set", () => {
  const state = expenseReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual([]);
});

test("should remove the expense by id", () => {
  const result = expenseReducer(expenses, {
    type: "REMOVE_EXPENSE",
    payload: "1"
  });
  expect(result.length).toBe(2);
});
test("shouldn't remove the expense by wrong id", () => {
  const result = expenseReducer(expenses, {
    type: "REMOVE_EXPENSE",
    payload: "4"
  });
  expect(result.length).toBe(3);
});

test("should update the expense from the array", () => {
  const action = {
    type: "EDIT_EXPENSE",
    payload: {
      id: "31",
      updates: {
        description: "anashid is a lovely woman",
        amount: 14,
        note: "best hijab i ever seen"
      }
    }
  };

  const result = expenseReducer(expenses, action);
  expect(result[2].description).toEqual("anashid is a lovely woman");
});

test("shouldn't update the expense from the array", () => {
  const action = {
    type: "EDIT_EXPENSE",
    payload: {
      id: "3432",
      updates: {
        description: "anashid is a lovely woman",
        amount: 14,
        note: "best hijab i ever seen"
      }
    }
  };

  const result = expenseReducer(expenses, action);
  expect(result[2].description).toEqual("anashid face");
});

test("should add an expense to the array", () => {
  const action = {
    type: "ADD_EXPENSE",
    payload: {
      id: "5",
      description: "wolf is here",
      note: "he is ready to rock",
      amount: 22200,
      createdAt: 2131232
    }
  };
  const result = expenseReducer(expenses, action);
  expect(result[3].description).toBe("wolf is here");
});
