import React from "react";
import { Link } from "react-router-dom";

function Topbar() {
  return (
    <div className="topbar">
        <p>Home</p>
      <Link className="topbuttons"> About </Link>
      <Link className="topbuttons"> Browse </Link>
      <Link className="topbuttons"> Login </Link>
      <Link className="topbuttons"> More </Link>

    </div>
  );
}

export default Topbar;
