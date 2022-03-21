import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <section>
    <nav className="navbar navbar-expand-lg py-md-3 py-1 navbar-dark fixed-top bg-dark">
      <div className="container">
        <NavLink className="navbar-brand pt-0" to="/">
          Sports News Feed
        </NavLink>
        <ul className="navbar-nav ms-auto mb-2 mb-sm-1 mb-lg-0">
          <li className="nav-item">
            <NavLink
              className="nav-link p-0 active"
              aria-current="page"
              to="/post/create"
            >
              Add Post
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  </section>
);

export default Header;
