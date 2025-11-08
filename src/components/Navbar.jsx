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
    // ✅ Navbar fixed with proper z-index
    <div className="nav">
   <header className="bg-gradient-to-r from-[#fc7fd2] to-[#d1f337] fixed top-0 left-0 w-full shadow-md z-[9999]">
  
      <nav
        className="flex justify-between items-center px-6 py-3 max-w-7xl mx-auto"
        ref={navRef}
      >
        {/* Logo */}
        <div className="logo">
          <img src={Logo} width={130} alt="Site Logo" />
        </div>

        {/* Mobile menu toggle */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-slate-800 focus:outline-none"
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

        {/* Navigation links */}
        <ul
          className={`md:flex ${
            isOpen ? "flex" : "hidden"
          } flex-col gap-4 md:flex-row md:gap-6 items-center text-lg text-slate-800 
          font-medium max-md:absolute max-md:right-[15%] max-md:top-[13%] 
          w-40 md:w-fit max-md:py-4 max-md:bg-white max-md:rounded-lg 
          max-md:shadow-lg max-md:border max-md:border-slate-100`}
        >
          <li>
            <ArchiveDop closeMenu={closeMenu} />
          </li>

          <li>
            <Link to="/tags" onClick={closeMenu}>
              Tags
            </Link>
          </li>

          <li>
            <Link to="/authors" onClick={closeMenu}>
              Authors
            </Link>
          </li>

          <li>
            <ArchiveDropdown closeMenu={closeMenu} />
          </li>

          <li>
            <Link to="/subscription" onClick={closeMenu}>
              Subscription
            </Link>
          </li>

          <li>
            <Link to="/about" onClick={closeMenu}>
              About
            </Link>
          </li>

          <li>
            <Link to="/services" onClick={closeMenu}>
              Services
            </Link>
          </li>

          <li>
            <Link to="/contact" onClick={closeMenu}>
              Contact
            </Link>
          </li>

          <li>
            <Link to="/login" onClick={closeMenu}>
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
