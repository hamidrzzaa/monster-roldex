const expensesReducerInitialState = [];

const expensesReducer = (state = expensesReducerInitialState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.payload];
    case "REMOVE_EXPENSE":
      const newState = state.filter(expense => expense.id !== action.payload);
      return newState;
    case "EDIT_EXPENSE":
      return state.map(expense => {
        if (expense.id === action.payload.id) {
          return { ...expense, ...action.payload.updates };
        } else {
          return expense;
        }
      });

    default:
      return state;
  }
};

export default expensesReducer;
