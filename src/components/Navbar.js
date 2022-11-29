import React from 'react'
import {BiDumbbell} from "react-icons/bi"

function Navbar() {
  return (
    <nav>
    <div className="navbar">
      <div>
        <a to="/" className="brand">
        <BiDumbbell/> Power gym 
        </a>
      </div>
      <div className="link-container">
        <a href='#' className="link">
          Add equipment
        </a>
        <a href='#' className="link">
          All equipment
        </a>
      </div>
    </div>
  </nav>
  )
}

export default Navbar