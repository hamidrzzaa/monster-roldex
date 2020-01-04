import React from "react";
import "./CardList.style.css";
import Card from "../Card/Card";
export default props => {
  return (
    <div className="CardList">
      {props.monsters.map(monster => {
        return <Card key={monster.id} monster={monster} />;
      })}
    </div>
  );
};

// export default CardList;
