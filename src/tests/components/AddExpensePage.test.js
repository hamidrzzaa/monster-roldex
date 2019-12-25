import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { AddExpensePage } from "../../components/AddExpensePage";
import ExpenseForm from "../../components/ExpenseForm";
import expenses from "../fixtures/expenses";
test("should render the AddExpensePage correctly", () => {
  const addExpense = jest.fn();
  const history = { push: jest.fn() };
  const wrapper = shallow(
    <AddExpensePage addExpense={addExpense} history={history} />
  );

  expect(toJson(wrapper)).toMatchSnapshot();
});

test("should handle on submit ", () => {
  const addExpense = jest.fn();
  const history = { push: jest.fn() };
  const wrapper = shallow(
    <AddExpensePage addExpense={addExpense} history={history} />
  );
  wrapper.find(ExpenseForm.displayName).prop("onSubmit")(expenses[2]);
  expect(history.push).toHaveBeenCalledWith("/");
  expect(addExpense).toHaveBeenCalledWith(expenses[2]);
});
