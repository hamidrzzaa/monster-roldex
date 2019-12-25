import moment from "moment";
const filterInitialState = {
  text: "",
  sortBy: "",
  startDate: moment().startOf("month"),
  endDate: moment().endOf("month")
};
const filterReducer = (state = filterInitialState, action) => {
  switch (action.type) {
    case "SET_TEXT":
      return { ...state, text: action.payload };
    case "SORT_BY_AMOUNT":
      return { ...state, sortBy: "amount" };
    case "SORT_BY_DATE":
      return { ...state, sortBy: "date" };
    case "SET_START_DATE":
      return {
        ...state,
        startDate: action.payload
      };
    case "SET_END_DATE":
      return {
        ...state,
        endDate: action.payload
      };
    default:
      return state;
  }
};

export default filterReducer;
