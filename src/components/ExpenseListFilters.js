import React from "react";
import { connect } from "react-redux";
import {
  setFilterText,
  sortByAmount,
  sortByDate,
  setEndDate,
  setStartDate
} from "../actions/filters";
import "react-dates/initialize";
import { DateRangePicker } from "react-dates";

export class ExpenseListFilter extends React.Component {
  state = { calenderFocused: null };
  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  };
  onFocusChange = focusedInput => {
    this.setState(() => ({ calenderFocused: focusedInput }));
  };
  onTextChange = e => {
    this.props.setFilterText(e.target.value);
  };
  onSelectChange = e => {
    if (e.target.value === "amount") {
      this.props.sortByAmount();
    } else {
      this.props.sortByDate();
    }
  };
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.filters.text}
          onChange={this.onTextChange}
        />
        <select
          value={this.props.filters.sortBy}
          onChange={this.onSelectChange}
        >
          <option value="amount">Amount</option>
          <option value="date">Date</option>
        </select>
        <DateRangePicker
          startDate={this.props.filters.startDate}
          endDate={this.props.filters.endDate}
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calenderFocused}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
          showClearDates={true}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    filters: state.filters
  };
};

export default connect(mapStateToProps, {
  setFilterText,
  sortByAmount,
  sortByDate,
  setEndDate,
  setStartDate
})(ExpenseListFilter);
