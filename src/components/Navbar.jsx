import React, { useEffect, useRef, useState } from "react";
import Logo from "../images/Logo.png";
import { Link } from "react-router-dom";
import ArchiveDropdown from "./ArchiveDropdown";
import ArchiveDop from "./ArchiveDop.jsx";

const Navbar = ({closemenu}) => {
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
    <div className="nav">
      <header className="bg-gradient-to-r from-[#6e0c80] to-[#d1f337] fixed top-0 left-0 w-full shadow-md z-[10000]">
        <nav
          className="flex justify-between items-center px-3 py-2 max-w-7xl mx-auto relative" // Added relative here
          ref={navRef}
        >
          {/* Logo - Increased z-index */}
          <div className="logo z-[9999]"> {/* Higher z-index than menu */}
            <Link to="/" className="hover:opacity-80 transition-opacity duration-200">
              <img src={Logo} width={130} alt="Site Logo" />
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <div className="md:hidden z-[10000]"> {/* Higher z-index than menu */}
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
                  d={!isOpen ? "M4 6h16M4 12h16m-7 6h7" : "M6 18L18 6M6 6l12 12"}
                />
              </svg>
            </button>
          </div>

          {/* Navigation links - Fixed positioning */}
          <ul
            className={`
              ${isOpen ? "flex" : "hidden"} 
              md:flex
              flex-col md:flex-row
              gap-4 md:gap-4 lg:gap-6
              items-center 
              text-md text-slate-800 font-medium
              /* Mobile styles - Fixed positioning */
              absolute md:static
              top-full md:top-auto
              left-0 md:left-auto
              right-0 md:right-auto
              w-full md:w-auto
              py-2 md:py-0
              bg-white md:bg-transparent
              rounded-lg md:rounded-none
              shadow-lg md:shadow-none
              border border-slate-100 md:border-none
              z-40 /* Lower z-index than logo and menu button */
            `}
          >
            <li>
              <ArchiveDop closeMenu={closeMenu} />
            </li>

            <li>
              <Link 
                to="/tags" 
                onClick={closeMenu}
                className="block w-full text-center md:text-left hover:text-blue-600 transition-colors duration-200 py-2 px-3 rounded-lg hover:bg-gray-100 md:hover:bg-white/50"
              >
                Tags
              </Link>
            </li>

            <li>
              <Link 
                to="/authors" 
                onClick={closeMenu}
                className="block w-full text-center md:text-left hover:text-blue-600 transition-colors duration-200 py-2 px-3 rounded-lg hover:bg-gray-100 md:hover:bg-white/50"
              >
                Authors
              </Link>
            </li>

            <li>
              <ArchiveDropdown closeMenu={closeMenu} />
            </li>

            <li>
              <Link 
                to="/subscription" 
                onClick={closeMenu}
                className="block w-full text-center md:text-left hover:text-blue-600 transition-colors duration-200 py-2 px-3 rounded-lg hover:bg-gray-100 md:hover:bg-white/50"
              >
                Subscription
              </Link>
            </li>

            <li>
              <Link 
                to="/about" 
                onClick={closeMenu}
                className="block w-full text-center md:text-left hover:text-blue-600 transition-colors duration-200 py-2 px-3 rounded-lg hover:bg-gray-100 md:hover:bg-white/50"
              >
                About
              </Link>
            </li>

            <li>
              <Link 
                to="/services" 
                onClick={closeMenu}
                className="block w-full text-center md:text-left hover:text-blue-600 transition-colors duration-200 py-2 px-3 rounded-lg hover:bg-gray-100 md:hover:bg-white/50"
              >
                Services
              </Link>
            </li>

            <li>
              <Link 
                to="/contact" 
                onClick={closeMenu}
                className="block w-full text-center md:text-left hover:text-blue-600 transition-colors duration-200 py-2 px-3 rounded-lg hover:bg-gray-100 md:hover:bg-white/50"
              >
                Contact
              </Link>
            </li>

            <li>
              <Link 
                to="/login" 
                onClick={closeMenu}
                className="block w-full text-center md:text-left bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-200 py-2 px-4 rounded-lg hover:shadow-lg"
              >
                Login
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;