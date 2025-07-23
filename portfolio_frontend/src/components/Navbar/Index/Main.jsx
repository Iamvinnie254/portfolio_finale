import React from "react";
import { FaBars } from "react-icons/fa";
import { Link, NavLink } from "react-router";

const Main = () => {
  return (
    <nav className="">
      <div className="flex justify-between">
        <a href="/" className="">
          <span className="">Vinnie</span>
        </a>
        <button className="">
          <span className="">
            <FaBars />
          </span>
        </button>
        <div className="">
          <ul className="flex gap-5">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/portfolio">Portfolio</NavLink>
            </li>
            <li>
              <NavLink to="/resume">Resume</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Main;
