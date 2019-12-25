import React from "react";
import { ExpenseList } from "../../components/ExpenseList";
import { shallow } from "enzyme";
import expenses from "../fixtures/expenses";
import toJson from "enzyme-to-json";

test("should render list oof expenses", () => {
  const wrapper = shallow(<ExpenseList expenses={expenses} />);
  expect(toJson(wrapper)).toMatchSnapshot();
});

test("should render a paragraph that says no expenses", () => {
  const wrapper = shallow(<ExpenseList expenses={[]} />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
