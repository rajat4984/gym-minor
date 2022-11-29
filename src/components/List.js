import React from "react";
import ListItem from "./ListItem";

function List() {
  return (
    <div className="list">
      <div className="all-eq-heading">
        <h1>All Equipments</h1>
      </div>
      <div className="list-container">
        <ListItem />
      </div>
    </div>
  );
}

export default List;
