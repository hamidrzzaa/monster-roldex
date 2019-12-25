import React from "react";
import moment from "moment";
import "react-dates/initialize";
import { SingleDatePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import { connect } from "react-redux";

import { addExpense } from "../actions/expenses";

export class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: props.expense ? props.expense.description : "",
      amount: props.expense ? (props.expense.amount / 100).toString() : "",
      note: props.expense ? props.expense.note : "",
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      focused: false,
      error: ""
    };
  }
  onInputChange = e => {
    // const inputName = e.target.name;
    // const inputValue = e.target.value;
    e.persist();
    if (e.target.name === "amount") {
      const amount = e.target.value;
      if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
        this.setState(() => ({ amount: amount }));
      }
    } else {
      this.setState(() => ({ [e.target.name]: e.target.value }));
    }
  };

  onDateChange = date => {
    if (date) {
      this.setState(() => ({ createdAt: date }));
    }
  };

  onFocusChange = ({ focused }) => {
    this.setState(() => ({ focused: focused }));
  };

  onFormSubmit = e => {
    e.preventDefault();
    if (!this.state.description || !this.state.amount) {
      return this.setState(() => ({
        error: "please provide the description or amount"
      }));
    }
    this.props.onSubmit({
      description: this.state.description,
      amount: parseFloat(this.state.amount, 10),
      createdAt: this.state.createdAt.valueOf(),
      note: this.state.note
    });
    this.setState(() => ({ error: "", description: "", amount: "", note: "" }));
  };
  renderError() {
    if (this.state.error) {
      return (
        <div style={{ color: "red" }}>
          <p>{this.state.error}</p>
        </div>
      );
    } else {
      return undefined;
    }
  }
  render() {
    return (
      <div>
        {this.renderError()}
        <form onSubmit={this.onFormSubmit}>
          <input
            onChange={this.onInputChange}
            name="description"
            type="text"
            placeholder="simple description..."
            autoFocus
            value={this.state.description}
          />
          <input
            onChange={this.onInputChange}
            value={this.state.amount}
            name="amount"
            type="text"
            placeholder="Enter the Amount "
          />
          <SingleDatePicker
            id="wolf is here"
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            onFocusChange={this.onFocusChange}
            focused={this.state.focused}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <textarea
            onChange={this.onInputChange}
            value={this.state.note}
            name="note"
            placeholder="Note about the Expense"
          ></textarea>
          <button>Add Expense</button>
        </form>
      </div>
    );
  }
}

ExpenseForm.displayName = "ExpenseForm";

export default connect(null, { addExpense })(ExpenseForm);
