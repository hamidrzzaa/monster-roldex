import moment from "moment";
import {
  setEndDate,
  setStartDate,
  setFilterText,
  sortByDate,
  sortByAmount
} from "../../actions/filters";

test("should generate setStartDate action obj", () => {
  const result = setStartDate(moment(0));
  expect(result).toEqual({
    type: "SET_START_DATE",
    payload: moment(0)
  });
});

test("should generate setEndDate action obj", () => {
  const result = setEndDate(moment(0));
  expect(result).toEqual({
    type: "SET_END_DATE",
    payload: moment(0)
  });
});
test("should generate sortByDate action obj", () => {
  const result = sortByDate();
  expect(result).toEqual({
    type: "SORT_BY_DATE"
  });
});
test("should generate sortByAmount action obj", () => {
  const result = sortByAmount();
  expect(result).toEqual({
    type: "SORT_BY_AMOUNT"
  });
});

test("should generate setFilterText action obj with default", () => {
  const result = setFilterText();
  expect(result).toEqual({
    type: "SET_TEXT",
    payload: ""
  });
});
test("should generate setFilterText action obj with value", () => {
  const result = setFilterText("wolf");
  expect(result).toEqual({
    type: "SET_TEXT",
    payload: "wolf"
  });
});
