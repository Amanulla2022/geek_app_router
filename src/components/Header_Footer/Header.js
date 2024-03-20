import React, { useEffect, useState } from "react";
import logo from "../../Images/logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };
  return (
    <header className="w-full fixed top-0 z-20 bg-white ">
      <div className="w-full  flex justify-evenly items-center p-4 flex-wrap">
        <a href="#" className="flex justify-center items-center">
          <img src={logo} alt="Header Logo" className="h-8 mr-2" />
          <h1 className="text-xl font-semibold">GeeksFoods</h1>
        </a>
        <div
          className={`absolute top-0 right-0 md:relative md:flex md:items-center md:space-x-6  ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col md:flex-row gap-6">
            <li>
              <Link
                to="/"
                className={`block ${activeLink === "/" ? "text-blue-500" : ""}`}
                onClick={handleLinkClick}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/qoutes"
                className={`block ${
                  activeLink === "/qoutes" ? "text-blue-500" : ""
                }`}
                onClick={handleLinkClick}
              >
                Quote
              </Link>
            </li>
            <li>
              <Link
                to="/restaruants"
                className={`block ${
                  activeLink === "/restaruants" ? "text-blue-500" : ""
                }`}
                onClick={handleLinkClick}
              >
                Restaurants
              </Link>
            </li>
            <li>
              <Link
                to="/food"
                className={`block ${
                  activeLink === "/food" ? "text-blue-500" : ""
                }`}
                onClick={handleLinkClick}
              >
                Food
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`block ${
                  activeLink === "/contact" ? "text-blue-500" : ""
                }`}
                onClick={handleLinkClick}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex gap-4 items-center">
          <button className="bg-blue-700 text-white font-medium cursor-pointer text-sm py-2 px-4 rounded-lg hover:bg-blue-800 transition-colors">
            Get Started
          </button>
          <button
            className="bx bx-menu text-4xl md:hidden"
            onClick={toggleMenu}
          >
            <GiHamburgerMenu />
          </button>
        </div>
      </div>
      <hr />
    </header>
  );
};

export default Header;
