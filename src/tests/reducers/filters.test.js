import filterReducer from "../../reducers/filter";
import moment from "moment";

test("should setup the reducers default value", () => {
  const result = filterReducer(undefined, { type: "@@INIT" });
  expect(result).toEqual({
    text: "",
    sortBy: "",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month")
  });
});

test("should sort by the amount", () => {
  const result = filterReducer(undefined, { type: "SORT_BY_AMOUNT" });
  expect(result.sortBy).toBe("amount");
});

test("should return  the sort by Date ", () => {
  const currentState = {
    text: "",
    startDate: undefined,
    endDate: undefined,
    sortBy: "amount"
  };
  const result = filterReducer(currentState, { type: "SORT_BY_DATE" });
  expect(result.sortBy).toBe("date");
});

test("should set the text filter", () => {
  const result = filterReducer(undefined, {
    type: "SET_TEXT",
    payload: "wolf"
  });
  expect(result.text).toBe("wolf");
});

test("should set start date Filter", () => {
  const result = filterReducer(undefined, {
    type: "SET_START_DATE",
    payload: moment(0).valueOf()
  });
  expect(result.startDate).toBe(moment(0).valueOf());
});
test("should set end date Filter", () => {
  const result = filterReducer(undefined, {
    type: "SET_END_DATE",
    payload: moment(0).valueOf()
  });
  expect(result.endDate).toBe(moment(0).valueOf());
});
