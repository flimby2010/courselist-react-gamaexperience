import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>FINANCE UNIVERSITY PROGRAMS </h1>
      <hr />
      <div className="links">
        <NavLink to="/" className="link" activeClassName="active" exact>
          Course List |
        </NavLink>
        <NavLink to="/add" className="link" activeClassName="active">
          Add Course
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
