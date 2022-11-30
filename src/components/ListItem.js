import React from "react";
import { AiFillDelete } from "react-icons/ai";

function ListItem() {
  return (
    <div>
      <div className="list-heading">
        <div className="heading-number">Sno</div>
        <div className="heading-eq-name">Name</div>
        <div className="heading-eq-weight">Weight</div>
        <div className="heading-eq-price">Price</div>
        <div className="heading-eq-delete">Delete</div>
      </div>
      <div className="list-item">
        <div className="number">1.</div>
        <div className="eq-name">Dumbell</div>
        <div className="eq-weight">2323 Kg</div>
        <div className="eq-price">$43534</div>
        <div className="eq-delete">{<AiFillDelete />}</div>
      </div>

      {/* 

      <div className="list-item">
        <div className="number">2.</div>
        <div className="eq-name">Dumbell</div>
        <div className="eq-weight">2323 Kg</div>
        <div className="eq-price">$43534</div>
        <hr />
      </div>
      <div className="list-item">
        <div className="number">3.</div>
        <div className="eq-name">Dumbell</div>
        <div className="eq-weight">2323 Kg</div>
        <div className="eq-price">$43534</div>
        <hr />
      </div>
      <div className="list-item">
        <div className="number">4.</div>
        <div className="eq-name">Dumbell</div>
        <div className="eq-weight">2323 Kg</div>
        <div className="eq-price">$43534</div>
        <hr />
      </div>
      <div className="list-item">
        <div className="number">5.</div>
        <div className="eq-name">Dumbell</div>
        <div className="eq-weight">2323 Kg</div>
        <div className="eq-price">$43534</div>
        <hr />
      </div> */}
    </div>
  );
}

export default ListItem;
