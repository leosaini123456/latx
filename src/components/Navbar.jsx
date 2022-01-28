import React from "react";
import { NavLink  } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <>
      <div className="navMain">
        <nav>
          <div className="mainLogo">
           <NavLink  to="/">
             <img src="img/main-logo.png" alt="" width="100px"/>
           </NavLink>
          </div>
          <ul>
            <li>
              <NavLink activeClassName="activeNav" to="/">Home</NavLink>
            </li>
            <li>
              <NavLink activeClassName="activeNav" to="/service">Services</NavLink>
            </li>
            <li>
              <NavLink LinkactiveClassName="activeNav" to="/blog">Blogs</NavLink>
            </li>
            <li>
              <NavLink activeClassName="activeNav" to="/contact">Contact</NavLink>
            </li>
            <li>
              <NavLink  activeClassName="activeNav" to="/about">About</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
export default Navbar;
