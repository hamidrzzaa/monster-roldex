import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { ExpenseListFilter } from "../../components/ExpenseListFilters";
import { defaultFilters, filters } from "../fixtures/filters";
import moment from "moment";
import { DateRangePicker } from "react-dates";

let setStartDate, setEndDate, setFilterText, sortByAmount, sortByDate, wrapper;

beforeEach(() => {
  setEndDate = jest.fn();
  setStartDate = jest.fn();
  setFilterText = jest.fn();
  sortByAmount = jest.fn();
  sortByDate = jest.fn();
  wrapper = shallow(
    <ExpenseListFilter
      filters={defaultFilters}
      setFilterText={setFilterText}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
      sortByAmount={sortByAmount}
      sortByDate={sortByDate}
    />
  );
});

test("should render the Filter component good", () => {
  expect(toJson(wrapper)).toMatchSnapshot();
});
test("should render the Filter component with real date correctly", () => {
  wrapper.setProps({
    filters: filters
  });
  expect(toJson(wrapper)).toMatchSnapshot();
});

test("should handle on change ", () => {
  const input = wrapper.find('input[type="text"]');
  input.simulate("change", { target: { value: "wolf" } });
  expect(setFilterText).toHaveBeenLastCalledWith("wolf");
});

test("should sort by date", () => {
  wrapper.setProps({ filters: filters });
  wrapper.find("select").simulate("change", { target: { value: "date" } });
  expect(sortByDate).toHaveBeenCalled();
});

test("should sort by amount", () => {
  wrapper.setProps({ filters: filters });
  wrapper.find("select").simulate("change", { target: { value: "amount" } });
  expect(sortByAmount).toHaveBeenCalled();
});

test("should set the startDate and endDate", () => {
  const startDate = moment(0).add(2, "years");
  const endDate = moment(0).add(4, "years");
  wrapper.find(DateRangePicker.displayName).prop("onDatesChange")({
    startDate,
    endDate
  });
  expect(setStartDate).toHaveBeenLastCalledWith(startDate);
  expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test("should handle the calender focus change", () => {
  const focusedInput = "endDate";
  wrapper.find(DateRangePicker.displayName).prop("onFocusChange")(focusedInput);
  expect(wrapper.state("calenderFocused")).toBe("endDate");
});
