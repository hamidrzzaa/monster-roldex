import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <NavLink activeClassName="is-active" exact to="/">
        Home
      </NavLink>

      <NavLink activeClassName="is-active" to="/create">
        Create
      </NavLink>
    </nav>
  );
};

export default Header;
