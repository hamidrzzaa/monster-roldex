import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import moment from "moment";
import { SingleDatePicker } from "react-dates";
import { ExpenseForm } from "../../components/ExpenseForm";
import expenses from "../fixtures/expenses";
test("lets see the from gets rendered", () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(toJson(wrapper)).toMatchSnapshot();
});

test("should render the form with some default values", () => {
  const wrapper = shallow(<ExpenseForm expense={expenses[1]} />);
  expect(toJson(wrapper)).toMatchSnapshot();
});

test("should render an error because of invalid data", () => {
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find("form").simulate("submit", { preventDefault: () => {} });
  expect(wrapper.state("error")).not.toBe(" ");
  expect(toJson(wrapper)).toMatchSnapshot();
});

test("should set description on input change", () => {
  const wrapper = shallow(<ExpenseForm />);
  wrapper
    .find("input")
    .at(0)
    .simulate("change", {
      target: { value: "wof is here", name: "description" },
      persist: () => {}
    });
  expect(wrapper.state("description")).toBe("wof is here");
});

test("should set the note input on change", () => {
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find("textarea").simulate("change", {
    target: { value: "king is here", name: "note" },
    persist: () => {}
  });
  expect(wrapper.state("note")).toBe("king is here");
});

test("should set the amount on input change", () => {
  const wrapper = shallow(<ExpenseForm />);
  wrapper
    .find("input")
    .at(1)
    .simulate("change", {
      target: { value: "121.33", name: "amount" },
      persist: () => {}
    });
  expect(wrapper.state("amount")).toBe("121.33");
});

test("should not set the amount on input change", () => {
  const wrapper = shallow(<ExpenseForm />);
  wrapper
    .find("input")
    .at(1)
    .simulate("change", {
      target: { value: "122.22321", name: "amount" },
      persist: () => {}
    });
  expect(wrapper.state("amount")).toBe("");
});

test("should onSubmit been called", () => {
  const onSubmitSpy = jest.fn();
  const wrapper = shallow(
    <ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />
  );
  wrapper.find("form").simulate("submit", { preventDefault: () => {} });
  expect(wrapper.state("error")).toBe("");
  expect(onSubmitSpy).toHaveBeenCalledWith({
    description: "wolf",
    amount: 12,
    note: "",
    createdAt: 0
  });
  expect(toJson(wrapper)).toMatchSnapshot();
});

test("should set the date on the sate", () => {
  const wrapper = shallow(<ExpenseForm />);
  const now = moment();
  wrapper.find(SingleDatePicker.displayName).prop("onDateChange")(now);
  expect(wrapper.state("createdAt")).toEqual(now);
});

test("should set the calender focused to true", () => {
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find(SingleDatePicker.displayName).prop("onFocusChange")({
    focused: true
  });
  expect(wrapper.state("focused")).toEqual(true);
});
