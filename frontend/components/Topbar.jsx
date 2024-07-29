import React from "react";
import { Link } from "react-router-dom";
import '../src/topbar.css'

function Topbar() {
  return (
    <div className="topbar">
      <Link to={'/'} className="topbuttons"> Home </Link>

      <div className="topbuttons">Categories
        <div className="topcontent">
          <a href="#typeBanner">Type</a>
          <a href="#diet">Diet</a>
          <a href="#habitat">Habitat</a>
          <a href="#location">Location</a>
          <a href="#bloodtemp">Blood</a>
        </div>
      </div>
      <Link to={'/search'} className="topbuttons"> Browse </Link>
      <Link to={'/uploads'} className="topbuttons"> Contribute </Link>
      <Link className="topbuttons"> More </Link>

    </div>
  );
}

export default Topbar;
