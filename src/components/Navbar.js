import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="navbar p-3 px-xl-5" >
            <NavLink className="active" to={"/"}>Home</NavLink>
        </div>
    </>
  );
}

export default Navbar;
