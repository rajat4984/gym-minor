import React from "react";
import { BiDumbbell } from "react-icons/bi";

function Form() {
  return (
    <div>
      <div className="form-container">
        <div className="form-heading">
          <h1>
         Add equipment
          </h1>
        </div>
        <form className="submission-form">
          <label htmlFor="eq-name">Equipment name:</label>
          <input type="text" />
          <label htmlFor="eq-weight">Equipment weight:</label>
          <input type="number" min={1} />
          <label htmlFor="eq-price">Equipment price:</label>
          <input type="number" min={1} />
          <input type="submit" className="submit-btn" />
        </form>
      </div>
    </div>
  );
}

export default Form;
