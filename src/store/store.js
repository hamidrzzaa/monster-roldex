import { createStore, combineReducers } from "redux";
import expensesReducer from "../reducers/expenses";
import filterReducer from "../reducers/filter";
import { addExpense } from "../actions/expenses";
import { setFilterText } from "../actions/filters";

const store = createStore(
  combineReducers({ expenses: expensesReducer, filters: filterReducer }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
