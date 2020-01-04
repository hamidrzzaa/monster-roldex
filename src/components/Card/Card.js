import React from "react";
import "./Card.style.css";
export default ({ monster: { name, id, email } }) => {
  return (
    <div className="card-container">
      <img
        alt="Monsters"
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};
