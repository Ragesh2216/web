import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const ArchiveDropdown = ({ closeMenu }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();
  const location = useLocation();

  const toggleDropdown = () => {
    setIsOpen(prev => !prev);
  };

  const closeDropdown = () => {
    setIsOpen(false);
    closeMenu?.();
  };

  const handleKeydown = (event) => {
    switch (event.key) {
      case 'Enter':
      case ' ':
        event.preventDefault();
        toggleDropdown();
        break;
      case 'ArrowDown':
        event.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
          setTimeout(() => {
            document.getElementById('archive-menu-item-0')?.focus();
          }, 100);
        }
        break;
      default:
        break;
    }
  };

  const handleMenuKeydown = (event) => {
    switch (event.key) {
      case 'Escape':
        setIsOpen(false);
        document.getElementById('archive-menu-button')?.focus();
        break;
      case 'Tab':
        setIsOpen(false);
        break;
      default:
        break;
    }
  };

  const handleMenuItemKeydown = (event, index, totalItems) => {
    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        const nextIndex = (index + 1) % totalItems;
        document.getElementById(`archive-menu-item-${nextIndex}`)?.focus();
        break;
      case 'ArrowUp':
        event.preventDefault();
        const prevIndex = (index - 1 + totalItems) % totalItems;
        document.getElementById(`archive-menu-item-${prevIndex}`)?.focus();
        break;
      default:
        break;
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

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const menuItems = [
    { to: "/monthly-archive", label: "Monthly archive" },
    { to: "/yearly-archive", label: "Yearly archive" },
  ];

  return (
    <div className="relative inline-block text-left z-10" ref={menuRef}>
      <button
        id="archive-menu-button"
        type="button"
        className={`navLink text-slate-800 font-medium text-base inline-flex items-center transition-colors duration-200 rounded-md px-3 py-2 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
          isOpen ? 'bg-gray-50' : ''
        }`}
        onClick={toggleDropdown}
        onKeyDown={handleKeydown}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-controls="archive-dropdown-menu"
      >
        dashboard
        {/* Removed the ExpandMoreOutlinedIcon */}
      </button>

      {isOpen && (
        <div
          id="archive-dropdown-menu"
          className="origin-top-right absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none animate-in fade-in-50 zoom-in-95"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="archive-menu-button"
          onKeyDown={handleMenuKeydown}
        >
          <div className="py-1">
            {menuItems.map((item, index) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={closeDropdown}
                className="navLink block px-4 py-2 text-slate-800 font-medium text-base hover:bg-gray-100 transition-colors duration-150 focus:outline-none focus:bg-gray-100 focus:text-slate-900"
                role="menuitem"
                tabIndex="0"
                id={`archive-menu-item-${index}`}
                onKeyDown={(e) => handleMenuItemKeydown(e, index, menuItems.length)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ArchiveDropdown;