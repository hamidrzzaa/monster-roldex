import expenseSelector from "../../selectors/expenses";
import moment from "moment";
import expenses from "../fixtures/expenses";

test("should text value", () => {
  const result = expenseSelector(expenses, {
    text: "a",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined
  });
  expect(result).toEqual([expenses[2], expenses[1]]);
});

test("should startDate filter works", () => {
  const result = expenseSelector(expenses, {
    text: "",
    sortBy: "date",
    startDate: moment(0),
    endDate: undefined
  });
  expect(result).toEqual([expenses[2], expenses[0]]);
});

test("should return all the expense before the endDate", () => {
  const result = expenseSelector(expenses, {
    sortBy: "date",
    text: "",
    startDate: undefined,
    endDate: moment(0).add(2, "days")
  });
  expect(result).toEqual([expenses[0], expenses[1]]);
});

test("should sort by date", () => {
  const result = expenseSelector(expenses, {
    sortBy: "date",
    text: "",
    startDate: undefined,
    endDate: undefined
  });
  expect(result).toEqual([expenses[2], expenses[0], expenses[1]]);
});
test("should sort by amount", () => {
  const result = expenseSelector(expenses, {
    sortBy: "amount",
    text: "",
    startDate: undefined,
    endDate: undefined
  });
  expect(result).toEqual([expenses[2], expenses[1], expenses[0]]);
});
