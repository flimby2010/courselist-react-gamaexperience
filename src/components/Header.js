import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>FINANCE UNIVERSITY PROGRAMS </h1>
      <br />
      <div className="links">
        <NavLink to="/" className="course-link" activeClassName="active" >
          Course List |
        </NavLink>
        <NavLink to="/add" className="add-link" activeClassName="active">
          Add Course
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
