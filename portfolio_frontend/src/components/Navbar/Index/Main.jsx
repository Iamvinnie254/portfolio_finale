import React, { useEffect, useRef, useState } from "react";
import { FaBars, FaCross, FaTimes } from "react-icons/fa";
import { Link, NavLink } from "react-router";

const navlinks = [
  {
    path: "/",
    label: "Home",
  },
  {
    path: "/portfolio",
    label: "Portfolio",
  },
  {
    path: "/resume",
    label: "Resume",
  },
  {
    path: "/services",
    label: "Services",
  },
  {
    path: "/blogs",
    label: "Blogs",
  },
  {
    path: "/contact",
    label: "Contact",
  },
];

const Main = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNavLinkClick = () => setIsOpen(false);
  return (
    <div className="sticky top-0 z-[9999] bg-gray-900 text-gray-100 shadow-md">
      <nav className=" flex justify-between items-center max-w-screen-xl mx-auto px-4 py-4">
        <NavLink to="/" className="font-serif text-xl font-bold">
          vinnie
        </NavLink>
        {/* nav button */}
        <button
          className="block md:hidden text-2xl cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="toggle menu"
        >
          <FaBars />
        </button>

        {/* Desktop & large screens */}

        <ul className="hidden md:flex gap-6 text-lg  pr-7 font-serif font-semibold">
          {navlinks.map(({ path, label }) => (
            <li
              key={path}
              className="hover:scale-3d transition ease-in-out duration-300"
            >
              <NavLink
                to={path}
                className={({ isActive }) =>
                  isActive ? "text-gray-500" : "hover:text-gray-500"
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile  & small screens */}
        <div
          ref={menuRef}
          className={`md:hidden fixed top-0 flex justify-between p-4 left-0 w-full bg-gray-900 transition-transform duration-300 shadow-md  ${
            isOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <ul className="flex flex-col items-center py-6 gap-6 font-semibold text-lg font-serif">
            {navlinks.map(({ path, label }) => (
              <li key={path}>
                <NavLink
                  to={path}
                  onClick={handleNavLinkClick}
                  className={({ isActive }) =>
                    isActive ? "text-gray-500" : "hover:text-gray-500"
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
          <button
            className="text-2xl top-0 fixed right-0 pr-8 pt-8 cursor-pointer"
            onClick={handleNavLinkClick}
          >
            <FaTimes className="" />
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Main;
