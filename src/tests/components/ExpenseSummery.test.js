import React from "react";
import {shallow} from "enzyme";
import {ExpenseSummery} from "../../components/ExpenseSummery";
import toJson from "enzyme-to-json";

test("should correctly render expense summery", () => {
    const wrapper = shallow(
        <ExpenseSummery expenseCount={1} expenseTotal={12.0}/>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
});
test("should correctly render expense summery with multiple expenses", () => {
    const wrapper = shallow(
        <ExpenseSummery expenseCount={4} expenseTotal={12.0}/>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
});
