import React, { useEffect, useRef, useState } from "react";
import Logo from "../images/Logo.webp";
import { Link, useLocation } from "react-router-dom";
import { 
  FaHome, 
  FaChevronDown, 
  FaBars, 
  FaTimes,
  FaTag,
  FaUserFriends,
  FaEnvelope,
  FaInfoCircle,
  FaConciergeBell,
  FaPhone,
  FaSignInAlt
} from "react-icons/fa";

const Navbar = () => {
  const navRef = useRef();
  const homeDropdownRef = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const [isHomeDropdownOpen, setIsHomeDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => {
    setIsOpen(false);
    setIsHomeDropdownOpen(false);
  };

  const toggleHomeDropdown = () => setIsHomeDropdownOpen(!isHomeDropdownOpen);
  const closeHomeDropdown = () => setIsHomeDropdownOpen(false);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Check if we're on homepage2 route
  const isHomePage2 = location.pathname === "/homepage2";
  
  // Get the current home link text
  const getHomeLinkText = () => {
    return isHomePage2 ? 'Home2' : 'Home';
  };

  // Get the home link based on current page
  const getHomeLink = () => {
    return isHomePage2 ? "/homepage2" : "/";
  };

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
      if (homeDropdownRef.current && !homeDropdownRef.current.contains(event.target)) {
        setIsHomeDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-[999] transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-100' 
          : 'bg-white/90 backdrop-blur-sm shadow-sm border-b border-gray-100'
      }`}
    >
      <nav
        ref={navRef}
        className="flex justify-between items-center px-4 sm:px-6 py-3 max-w-7xl mx-auto relative"
      >
        {/* Logo */}
        <div className="z-50">
          <Link to="/" className="group">
            <img 
              src={Logo} 
              width={140} 
              alt="Site Logo" 
              className="transition-transform duration-300 group-hover:scale-105"
            />
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <div className="lg:hidden z-50">
          <button
            onClick={toggleMenu}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 group"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <FaTimes className="w-6 h-6 text-gray-700 group-hover:text-purple-600" />
            ) : (
              <FaBars className="w-6 h-6 text-gray-700 group-hover:text-purple-600" />
            )}
          </button>
        </div>

        {/* Navigation Links */}
        <ul
          className={`
            ${isOpen ? "flex" : "hidden"} 
            lg:flex
            flex-col lg:flex-row
            gap-1 lg:gap-1
            items-center
            absolute lg:static
            top-full left-0 w-full lg:w-auto
            bg-white lg:bg-transparent
            shadow-2xl lg:shadow-none
            py-6 lg:py-0
            rounded-2xl lg:rounded-none
            z-40
            transition-all duration-300 ease-in-out
            mt-2 lg:mt-0
            px-4 lg:px-0
          `}
        >
          {/* Home Link with Dropdown for Both Pages */}
          <li className="relative w-full lg:w-auto group" ref={homeDropdownRef}>
            <div className="flex items-center justify-between w-full lg:w-auto">
              <Link
                to={getHomeLink()}
                onClick={closeMenu}
                className="flex items-center gap-2 w-full lg:w-auto py-3 px-4 rounded-xl text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-all duration-200 font-medium"
              >
                <FaHome className="text-gray-600 group-hover:text-purple-600 transition-colors duration-300" />
                <span className="relative">
                  {getHomeLinkText()}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 group-hover:w-full transition-all duration-300"></span>
                </span>
              </Link>
              
              {/* Dropdown toggle button - show on all pages */}
              <button
                onClick={toggleHomeDropdown}
                className="hidden lg:flex items-center justify-center p-2 hover:bg-gray-100 rounded-lg transition-all duration-300 ml-1"
                aria-label="Toggle home dropdown"
              >
                <FaChevronDown 
                  className={`w-4 h-4 text-gray-500 transition-transform duration-300 ${
                    isHomeDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>

            {/* Desktop Dropdown Menu */}
            {isHomeDropdownOpen && (
              <div className="hidden lg:block absolute top-full left-0 mt-1 w-48 bg-white/95 backdrop-blur-sm border border-gray-200 rounded-xl shadow-xl py-2 z-50 animate-fadeIn">
                {isHomePage2 ? (
                  // When on Home2, show option to switch to Home
                  <Link
                    to="/"
                    onClick={() => {
                      closeHomeDropdown();
                      closeMenu();
                    }}
                    className="flex items-center gap-3 py-3 px-4 hover:bg-purple-50 hover:text-purple-600 transition-all duration-300 group"
                  >
                    <FaHome className="text-gray-600 group-hover:text-purple-600" />
                    <span className="font-medium">Switch to Home</span>
                  </Link>
                ) : (
                  // When on Home, show option to switch to Home2
                  <Link
                    to="/homepage2"
                    onClick={() => {
                      closeHomeDropdown();
                      closeMenu();
                    }}
                    className="flex items-center gap-3 py-3 px-4 hover:bg-purple-50 hover:text-purple-600 transition-all duration-300 group"
                  >
                    <FaHome className="text-gray-600 group-hover:text-purple-600" />
                    <span className="font-medium">Switch to Home2</span>
                  </Link>
                )}
              </div>
            )}
          </li>

          {/* Tags */}
          <li className="w-full lg:w-auto">
            <Link
              to="/tags"
              onClick={closeMenu}
              className="flex items-center gap-2 justify-center lg:justify-start w-full lg:w-auto py-3 px-4 rounded-xl text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-all duration-200 group font-medium"
            >
              <FaTag className="text-gray-600 group-hover:text-purple-600 transition-colors duration-300" />
              <span className="relative">
                Tags
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 group-hover:w-full transition-all duration-300"></span>
              </span>
            </Link>
          </li>

          {/* Authors */}
          <li className="w-full lg:w-auto">
            <Link
              to="/authors"
              onClick={closeMenu}
              className="flex items-center gap-2 justify-center lg:justify-start w-full lg:w-auto py-3 px-4 rounded-xl text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-all duration-200 group font-medium"
            >
              <FaUserFriends className="text-gray-600 group-hover:text-purple-600 transition-colors duration-300" />
              <span className="relative">
                Authors
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 group-hover:w-full transition-all duration-300"></span>
              </span>
            </Link>
          </li>

          {/* Dashboard */}
          <li className="w-full lg:w-auto">
            <Link
              to="/monthly-archive"
              onClick={closeMenu}
              className="flex items-center gap-2 justify-center lg:justify-start w-full lg:w-auto py-3 px-4 rounded-xl text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-all duration-200 group font-medium"
            >
              <FaUserFriends className="text-gray-600 group-hover:text-purple-600 transition-colors duration-300" />
              <span className="relative">
                Dashboard
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 group-hover:w-full transition-all duration-300"></span>
              </span>
            </Link>
          </li>

          {/* Subscription */}
          <li className="w-full lg:w-auto">
            <Link
              to="/subscription"
              onClick={closeMenu}
              className="flex items-center gap-2 justify-center lg:justify-start w-full lg:w-auto py-3 px-4 rounded-xl text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-all duration-200 group font-medium"
            >
              <FaEnvelope className="text-gray-600 group-hover:text-purple-600 transition-colors duration-300" />
              <span className="relative">
                Subscription
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 group-hover:w-full transition-all duration-300"></span>
              </span>
            </Link>
          </li>

          {/* About */}
          <li className="w-full lg:w-auto">
            <Link
              to="/about"
              onClick={closeMenu}
              className="flex items-center gap-2 justify-center lg:justify-start w-full lg:w-auto py-3 px-4 rounded-xl text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-all duration-200 group font-medium"
            >
              <FaInfoCircle className="text-gray-600 group-hover:text-purple-600 transition-colors duration-300" />
              <span className="relative">
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 group-hover:w-full transition-all duration-300"></span>
              </span>
            </Link>
          </li>

          {/* Services */}
          <li className="w-full lg:w-auto">
            <Link
              to="/services"
              onClick={closeMenu}
              className="flex items-center gap-2 justify-center lg:justify-start w-full lg:w-auto py-3 px-4 rounded-xl text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-all duration-200 group font-medium"
            >
              <FaConciergeBell className="text-gray-600 group-hover:text-purple-600 transition-colors duration-300" />
              <span className="relative">
                Services
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 group-hover:w-full transition-all duration-300"></span>
              </span>
            </Link>
          </li>

          {/* Contact */}
          <li className="w-full lg:w-auto">
            <Link
              to="/contact"
              onClick={closeMenu}
              className="flex items-center gap-2 justify-center lg:justify-start w-full lg:w-auto py-3 px-4 rounded-xl text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-all duration-200 group font-medium"
            >
              <FaPhone className="text-gray-600 group-hover:text-purple-600 transition-colors duration-300" />
              <span className="relative">
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 group-hover:w-full transition-all duration-300"></span>
              </span>
            </Link>
          </li>

          {/* Login Button */}
          <li className="w-full lg:w-auto mt-4 lg:mt-0">
            <Link
              to="/login"
              onClick={closeMenu}
              className="flex items-center justify-center gap-2 w-full lg:w-auto bg-gradient-to-r from-purple-600 to-purple-700 text-white hover:from-purple-700 hover:to-purple-800 transition-all duration-200 py-3 px-6 rounded-xl font-semibold shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-95"
            >
              <FaSignInAlt className="text-white" />
              <span>Login</span>
            </Link>
          </li>
        </ul>

        {/* Mobile Home Dropdown Menu */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-gray-200 shadow-lg z-30 px-4 py-4">
            <div className="max-w-sm mx-auto">
              {isHomePage2 ? (
                // When on Home2, show option to switch to Home
                <Link
                  to="/"
                  onClick={() => {
                    setIsHomeDropdownOpen(false);
                    closeMenu();
                  }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-purple-50 hover:bg-purple-100 hover:text-purple-600 transition-all duration-200 group"
                >
                  <FaHome className="text-purple-500 group-hover:scale-110 transition-transform" />
                  <span className="font-medium">Switch to Home</span>
                </Link>
              ) : (
                // When on Home, show option to switch to Home2
                <Link
                  to="/homepage2"
                  onClick={() => {
                    setIsHomeDropdownOpen(false);
                    closeMenu();
                  }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-purple-50 hover:bg-purple-100 hover:text-purple-600 transition-all duration-200 group"
                >
                  <FaHome className="text-purple-500 group-hover:scale-110 transition-transform" />
                  <span className="font-medium">Switch to Home2</span>
                </Link>
              )}
            </div>
          </div>
        )}
      </nav>

      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
      `}</style>
    </header>
  );
};

export default Navbar;