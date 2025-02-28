import React, { useState } from "react";
import logo from "../assets/logo.png";
import person from "../assets/person.png";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom"; // for routing

const Nav = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // For profile dropdown functionality
  const [isMenuOpen, setIsMenuOpen] = useState(false); // For mobile navbar toggle

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-[#1D293F1F] sticky top-0 z-50">
      <nav className="h-[121px] text-white custom-layout flex items-center justify-between">
        {/* Logo */}
        <div id="Home">
          <img src={logo} alt="logo" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-4 text-[20px] font-medium">
          <a href="#Home">Home</a>
          <a href="#property-section">Properties</a>
          <a href="#about-us">About Us</a>
          <a href="#blog">Blog</a>
          <a href="#contact-us">Contact Us</a>
        </div>

        {/* Mobile Menu Toggle Button (Hamburger Menu) */}
        <button
          className="lg:hidden flex flex-col justify-center items-center space-y-2 p-2"
          onClick={toggleMobileMenu}
        >
          <div
            className={`w-6 h-0.5 bg-white transition-transform duration-300 ${
              isMenuOpen ? "transform rotate-45 translate-y-2" : ""
            }`}
          ></div>
          <div
            className={`w-6 h-0.5 bg-white transition-opacity duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          ></div>
          <div
            className={`w-6 h-0.5 bg-white transition-transform duration-300 ${
              isMenuOpen ? "transform -rotate-45 -translate-y-2" : ""
            }`}
          ></div>
        </button>

        {/* Desktop Profile Avatar and Dropdown */}
        <div className="hidden md:flex gap-2 items-center">
          <img src={person} alt="person avatar" />
          <p
            className="text-[26px] font-medium cursor-pointer"
            onClick={toggleDropdown}
          >
            Aisha Cucurella
          </p>
          <IoIosArrowDown size={20} onClick={toggleDropdown} />

          {/* Dropdown menu for profile */}
          {isDropdownOpen && (
            <div className="absolute bg-white text-black shadow-lg mt-2 right-0 p-2 rounded-lg z-10">
              <Link to="/login" className="block px-4 py-2 hover:bg-gray-100">
                Sign In
              </Link>
              <Link to="/register" className="block px-4 py-2 hover:bg-gray-100">
                Sign Up
              </Link>
            </div>
          )}
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-[121px] left-0 right-0 bg-white text-black p-4 shadow-md z-20">
            {/* The full-screen dropdown menu with white background */}
            <a href="#Home" className="block py-2">Home</a>
            <a href="#property-section" className="block py-2">Properties</a>
            <a href="#about-us" className="block py-2">About Us</a>
            <a href="#blog" className="block py-2">Blog</a>
            <a href="#contact-us" className="block py-2">Contact Us</a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Nav;
