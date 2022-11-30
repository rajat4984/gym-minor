import React from 'react'
import {BiDumbbell} from "react-icons/bi"
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
    <div className="navbar">
      <div>
        <Link to="/" className="brand">
        <BiDumbbell/> Power gym 
        </Link>
      </div>
      <div className="link-container">
        <Link to="/" className="link">
          Add equipment
        </Link>
        <Link to="items" className="link">
          All equipments
        </Link>
      </div>
    </div>
  </nav>
  )
}

export default Navbar