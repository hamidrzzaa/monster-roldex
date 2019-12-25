import moment from "moment";

const expenses = [
  {
    id: "1",
    description: "wolf",
    amount: 1200,
    note: "",
    createdAt: 0
  },
  {
    id: "2",
    description: "ahlam ass",
    amount: 1300,
    note: "sexy ass",
    createdAt: moment(0)
      .subtract(4, "days")
      .valueOf()
  },
  {
    id: "31",
    description: "anashid face",
    amount: 2000,
    note: "beautiful face",
    createdAt: moment(0)
      .add(4, "days")
      .valueOf()
  }
];

export default expenses;
