import moment from "moment";
export default (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter(expense => {
      let startDateMatch = startDate
        ? startDate.isSameOrBefore(moment(expense.createdAt), "day")
        : true;
      let endDateMatch = endDate
        ? endDate.isSameOrAfter(moment(expense.createdAt), "day")
        : true;
      let textMatch =
        expense.description.toLowerCase().includes(text) ||
        expense.note.toLowerCase().includes(text);
      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((expA, expB) => {
      if (sortBy === "date") {
        return expA.createdAt > expB.createdAt ? -1 : +1;
      }
      if (sortBy === "amount") {
        return expA.amount <= expB.amount ? 1 : -1;
      }
    });
};
