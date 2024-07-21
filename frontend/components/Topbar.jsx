import React from "react";
import { Link } from "react-router-dom";

function Topbar() {
  return (
    <div className="topbar">
      <Link to={'/'} className="topbuttons"> Home </Link>
      <Link to={'/search'} className="topbuttons"> Browse </Link>
      <Link to={'/uploads'} className="topbuttons"> Contribute </Link>
      <Link className="topbuttons"> More </Link>

    </div>
  );
}

export default Topbar;
