import React from "react";
import "./SearchInput.styles.css";
export default props => {
  return (
    <div className="search-input">
      <input
        onChange={props.handleInput}
        value={props.searchField}
        name="search"
        type="search"
        placeholder="search..."
        autoComplete="off"
      />
    </div>
  );
};
