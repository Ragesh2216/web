import React, { useEffect, useRef, useState } from "react";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import { Link } from "react-router-dom";

const ArchiveDropdown = ({ closeMenu }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();

  const toggleDropdown = () => {
    setIsOpen(prev => !prev); // Use functional update for reliability
  };

  const handleKeydown = (event) => {
    // Open/Close on Enter or Space
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault(); // Prevent default action for space/enter on link/button
      toggleDropdown();
    }
  };

  const handleMenuKeydown = (event) => {
    // Close on Escape key
    if (event.key === 'Escape') {
      setIsOpen(false);
      // Optional: Focus the toggle button after closing
      document.getElementById('archive-menu-button')?.focus();
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-left z-10" ref={menuRef}>
      {/* 1. Changed Link to Button for better accessibility and control */}
      <button
        id="archive-menu-button"
        type="button" // Important for buttons not inside a form
        className="navLink text-slate-800 font-medium text-base inline-flex items-center"
        onClick={toggleDropdown}
        onKeyDown={handleKeydown} // Add keyboard support
        aria-expanded={isOpen}    // ARIA state: indicates if the dropdown is visible
        aria-haspopup="true"      // ARIA state: indicates it controls a popup menu
      >
        Archive
        <ExpandMoreOutlinedIcon className="-mr-1 ml-2 !h-5 !w-5" />
      </button>

      {isOpen && (
        <div
          className={`origin-top-right absolute left-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none`}
          role="menu"             // ARIA role: defines this as a menu container
          aria-orientation="vertical"
          tabIndex="-1"            // Allows the div to receive focus
          onKeyDown={handleMenuKeydown} // Add keyboard support for Esc
        >
          <div className="py-1">
            {/* All Link components get role="menuitem" for accessibility */}
            
            
            <Link
              to="/monthly-archive" 
              onClick={closeMenu}
              className="navLink block px-4 py-2 text-slate-800 font-medium text-base hover:bg-gray-100"
              role="menuitem"
              tabIndex="0" // Set to 0 so it's focusable with Tab
              id="archive-menu-item-1"
            >
              Monthly archive
            </Link>
            <Link
              to="/yearly-archive" 
              onClick={closeMenu}
              className="navLink block  px-4 py-2 text-slate-800 font-medium text-base hover:bg-gray-100"
              role="menuitem"
              tabIndex="0" // Set to 0 so it's focusable with Tab
              id="archive-menu-item-2"
            >
              Yearly archive
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default ArchiveDropdown;