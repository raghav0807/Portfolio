// import React from "react";
import logo from "../assets/logo.jpeg";
import { FaTimes, FaBars } from "react-icons/fa";
import { NAVIGATION_LINKS } from "../constants";
import { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);

    if (targetElement) {
      const offset = -85;

      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY + offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }

    setIsMobileMenuOpen(false);
  };

  return (
    <div>
      <nav className="fixed left-0 right-0 top-4 z-50">
        {/* Desktop Navigation */}
        <div className="mx-auto hidden max-w-2xl items-center rounded-lg border border-stone-50/30 bg-black/20 py-3 backdrop-blur-lg lg:flex">
          <div className="flex items-center justify-between gap-6">
            <div>
              <a href="#">
                <img src={logo} width={150} alt="logo" />
              </a>
            </div>
            <div>
              {/* Changed <ul> to <nav> and removed <li> to remove dots */}
              <nav className="flex items-center gap-4">
                {NAVIGATION_LINKS.map((item, index) => (
                  <a
                    key={index}
                    className="text-sm hover:text-yellow-400 no-underline" // Removed underline
                    href={item.href}
                    onClick={(e) => handleLinkClick(e, item.href)}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="rounded-lg backdrop-blur-md lg:hidden">
          <div className="flex items-center justify-between">
            <div>
              <a href="#">
                <img src={logo} alt="logo" width={90} className="m-2" />
              </a>
            </div>
            <div className="flex items-center">
              <button
                className="focus:outline-none lg:hidden"
                onClick={toggleMobileMenu}
              >
                {isMobileMenuOpen ? (
                  <FaTimes className="m-2 h-6 w-5" />
                ) : (
                  <FaBars className="m-2 h-6 w-5" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile menu, no dots and no underlines */}
          {isMobileMenuOpen && (
            <nav className="ml-4 mt-4 flex flex-col gap-4 backdrop-blur-md">
              {NAVIGATION_LINKS.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="block w-full text-lg no-underline" // Removed underline
                  onClick={(e) => handleLinkClick(e, item.href)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
