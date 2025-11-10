import React, { useEffect, useRef, useState } from "react";
import Logo from "../images/Logo.png";
import { Link } from "react-router-dom";
import ArchiveDropdown from "./ArchiveDropdown";
import ArchiveDop from "./ArchiveDop.jsx";

const Navbar = () => {
  const navRef = useRef();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="bg-gradient-to-r from-[#6e0c80] to-[#d1f337] fixed top-0 left-0 w-full shadow-md z-[999]">
      <nav
        ref={navRef}
        className="flex justify-between items-center px-4 sm:px-6 py-3 max-w-7xl mx-auto relative"
      >
        {/* Logo */}
        <div className="z-50">
          <Link to="/" className="hover:opacity-80 transition-opacity duration-200">
            <img src={Logo} width={130} alt="Site Logo" />
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <div className="lg:hidden z-50">
          <button
            onClick={toggleMenu}
            className="text-slate-800 focus:outline-none hover:bg-white/30 rounded-lg p-2 transition-all duration-200 hover:scale-105"
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  !isOpen
                    ? "M4 6h16M4 12h16m-7 6h7"
                    : "M6 18L18 6M6 6l12 12"
                }
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <ul
          className={`
            ${isOpen ? "flex" : "hidden"} 
            lg:flex
            flex-col lg:flex-row
            gap-4 lg:gap-6
            items-center
            text-base font-medium text-slate-800
            absolute lg:static
            top-full left-0 w-full lg:w-auto
            bg-white lg:bg-transparent
            border border-gray-200 lg:border-none
            shadow-xl lg:shadow-none
            py-4 lg:py-0
            rounded-lg lg:rounded-none
            z-40
            transition-all duration-300 ease-in-out
          `}
        >
          <li><ArchiveDop closeMenu={closeMenu} /></li>

          <li>
            <Link
              to="/tags"
              onClick={closeMenu}
              className="block text-center lg:text-left py-2 px-4 rounded-lg hover:bg-gray-100 lg:hover:bg-white/20 hover:text-purple-700"
            >
              Tags
            </Link>
          </li>

          <li>
            <Link
              to="/authors"
              onClick={closeMenu}
              className="block text-center lg:text-left py-2 px-4 rounded-lg hover:bg-gray-100 lg:hover:bg-white/20 hover:text-purple-700"
            >
              Authors
            </Link>
          </li>

          <li><ArchiveDropdown closeMenu={closeMenu} /></li>

          <li>
            <Link
              to="/subscription"
              onClick={closeMenu}
              className="block text-center lg:text-left py-2 px-4 rounded-lg hover:bg-gray-100 lg:hover:bg-white/20 hover:text-purple-700"
            >
              Subscription
            </Link>
          </li>

          <li>
            <Link
              to="/about"
              onClick={closeMenu}
              className="block text-center lg:text-left py-2 px-4 rounded-lg hover:bg-gray-100 lg:hover:bg-white/20 hover:text-purple-700"
            >
              About
            </Link>
          </li>

          <li>
            <Link
              to="/services"
              onClick={closeMenu}
              className="block text-center lg:text-left py-2 px-4 rounded-lg hover:bg-gray-100 lg:hover:bg-white/20 hover:text-purple-700"
            >
              Services
            </Link>
          </li>

          <li>
            <Link
              to="/contact"
              onClick={closeMenu}
              className="block text-center lg:text-left py-2 px-4 rounded-lg hover:bg-gray-100 lg:hover:bg-white/20 hover:text-purple-700"
            >
              Contact
            </Link>
          </li>

          <li>
            <Link
              to="/login"
              onClick={closeMenu}
              className="block text-center lg:text-left bg-white text-purple-700 hover:bg-gray-100 hover:text-purple-800 transition-colors duration-200 py-2 px-6 rounded-lg font-semibold"
            >
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
