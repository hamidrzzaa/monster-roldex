import { createStore, combineReducers } from "redux";
import expensesReducer from "../reducers/expenses";
import filterReducer from "../reducers/filter";
import { addExpense } from "../actions/expenses";
import { setFilterText } from "../actions/filters";

const store = createStore(
  combineReducers({ expenses: expensesReducer, filters: filterReducer }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.dispatch(
  addExpense({
    description: "money for the rent",
    note: "here we go",
    amount: 400,
    createdAt: Date.now()
  })
);
store.dispatch(
  addExpense({
    description: "money for BMW m4",
    note: "here we go",
    amount: 50000,
    createdAt: Date.now()
  })
);
store.dispatch(
  addExpense({
    description: "money for the razor blade",
    note: "here we go",
    amount: 1400,
    createdAt: Date.now()
  })
);

export default store;
