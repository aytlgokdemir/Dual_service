import React, { useState } from "react";
import logo1 from "../assets/logo1.svg";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showServiceLink, setShowServiceLink] = useState(true);
  const [showProductLink, setShowProductLink] = useState(true);
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navigateToUberUns = () => {
    setShowServiceLink(false);
    setShowProductLink(false);
    closeMobileMenu(true);
    navigate("/überuns");
  };

  return (
    <header className="header bg-gray-100">
      <nav className="mx-auto flex max-w-7xl custom-max-width px-4 sm:px-6 lg:px-8 items-center justify-between border-2 border-b-gray-500">
        <div className="logo flex lg:flex-1 ml-12">
          <a href="/" className="-m-7">
            <img
              alt="..."
              src={logo1}
              className="cursor-pointer h-[150px] w-auto"
            />
          </a>
        </div>
        <div className="menu-links flex justify-between items-center gap-4 sm:gap-10 font-semibold cursor-pointer">
          <NavLink
            to="/"
            smooth={true}
            duration={500}
            onClick={() => {
              setShowServiceLink(true);
              setShowProductLink(true);
            }}
          >
            HOME
          </NavLink>
          {showServiceLink && (
            <Link
              to="dienstleistungen"
              spy={true}
              smooth={true}
              duration={500}
              onClick={closeMobileMenu}
            >
              DIENSTLEISTUNGEN
            </Link>
          )}
          {showProductLink && (
            <Link
              to="product"
              spy={true}
              smooth={true}
              duration={500}
              onClick={closeMobileMenu}
            >
              PRODUKT
            </Link>
          )}
          <NavLink
            to="/überuns"
            onClick={() => {
              setShowServiceLink(false);
              setShowProductLink(false);
            }}
          >
            ÜBER UNS
          </NavLink>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 transition-transform duration-300 ease-in-out transform hover:scale-110"
            onClick={toggleMobileMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`w-6 h-6 ${isMobileMenuOpen ? "hidden" : ""}`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`w-6 h-6 ${isMobileMenuOpen ? "" : "hidden"}`}
              onClick={closeMobileMenu}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </nav>
      {isMobileMenuOpen && (
        <div className="navigation lg:hidden h-48 bg-gray-700 text-white transition-transform ease-in-out duration-300 ">
          {/* Mobile menu content */}
          <div className="p-7">
            <Link
              to="dienstleistungen"
              spy={true}
              smooth={true}
              duration={500}
              onClick={closeMobileMenu}
              className="flex  cursor-pointer font-semibold mb-3 "
            >
              DIENSTLEISTUNGEN
            </Link>
            <Link
              to="product"
              spy={true}
              smooth={true}
              duration={500}
              onClick={closeMobileMenu}
              className="flex cursor-pointer font-semibold mb-3 "
            >
              PRODUKT
            </Link>
            <Link
              to="/überuns"
              onClick={navigateToUberUns}
              className="flex cursor-pointer font-semibold mb-3 "
            >
              ÜBER UNS
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
