import React from "react";
import { Link } from "react-router-dom";

export const PageNotFound = () => (
  <div>
    <h1>
      404! -<Link to="/">Go Home</Link>
    </h1>
  </div>
);

export default PageNotFound;
