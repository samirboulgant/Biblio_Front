import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="/">
          Library APP
        </a>
        <div className={{ marginLeft: "100px" }}>
          <Link className="btn btn-outline-light" to="/addbook">
            Add User
          </Link>
        </div>
      </nav>
    </div>
  );
}
