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
    // ✅ Navbar fixed with proper z-index
    <div className="nav">
      <header className="bg-gradient-to-r from-[#fc7fd2] to-[#d1f337] 
      fixed top-0 left-0 w-full shadow-md z-[9999]">

        <nav
          className="flex justify-between items-center
           px-6 py-3 max-w-7xl mx-auto "
          ref={navRef}
        >
          {/* Logo */}
          <div className="logo">
            {<Link to="/">
              <img src={Logo} width={130} alt="Site Logo" />
            </Link>
            }
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
         className={`${isOpen ? "flex" : "hidden"} md:flex
  flex-col md:flex-row gap-4 md:gap-1 lg:gap-6 items-center text-md text-slate-800 
  font-medium 
  /* Mobile styles */
  absolute right-2 top-full w-48 py-2 bg-white rounded-lg shadow-lg border border-slate-100 z-50
  /* Tablet/Desktop styles */
  md:static md:w-auto md:py-0 md:bg-transparent md:rounded-none md:shadow-none md:border-none`}   >
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
