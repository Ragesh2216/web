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
      <header className="bg-gradient-to-r from-[#fc7fd2] to-[#d1f337] fixed top-0 left-0 w-full shadow-md z-[9999]">
        <nav
          className="flex justify-between items-center px-6 py-3 max-w-7xl mx-auto relative"
          ref={navRef}
        >
          {/* Logo */}
          <div className="logo z-[10000]">
            <Link to="/" className="hover:opacity-80 transition-opacity duration-200">
              <img src={Logo} width={130} alt="Site Logo" />
            </Link>
          </div>

          {/* Mobile menu toggle - FIXED: Only show on mobile, hide on tablet and up */}
          <div className="md:hidden z-[10000]">
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
                  d={!isOpen ? "M4 6h16M4 12h16m-7 6h7" : "M6 18L18 6M6 6l12-12"}
                />
              </svg>
            </button>
          </div>

          {/* Navigation links - FIXED: Use md: breakpoints consistently */}
          <ul
  className={`
    ${isOpen ? "flex" : "hidden"} 
    md:flex
    flex-col md:flex-row
    gap-1 md:gap-1 lg:gap-1
    items-center 
    text-md md:text-base lg:text-lg text-slate-800 font-medium
    /* Mobile styles */
    absolute md:static
    top-16 md:top-auto
    /* ... rest of classes using md: for tablet, lg: for desktop */
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