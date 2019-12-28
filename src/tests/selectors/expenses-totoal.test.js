import expensesTotal from "../../selectors/expenses-total";
import expenses from "../fixtures/expenses";

test("should return 0 if no expenses", () => {
    const result = expensesTotal([]);
    expect(result).toBe(0);
});

test("should add up a single expense correctly", () => {
    const result = expensesTotal(expenses.slice(0, 2));
    expect(result).toBe(2500);
});
