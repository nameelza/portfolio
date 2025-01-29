import { useState } from "react";
import { NavLink } from "react-router-dom";
import Dropdown from "./Dropdown";

const NavbarLink = ({ to, label, closeMenu }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `nav-link ${isActive && "active"} ${(label =
        "portfolio" && "portfolio-link")}`
    }
    onClick={closeMenu}
  >
    {label}
    {label === "PORTFOLIO" && <Dropdown />}
  </NavLink>
);

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleToggle = () => {
    setIsNavOpen((prevState) => !prevState);
  };

  const closeMenu = () => {
    setIsNavOpen(false);
  };

  return (
    <nav>
      <div className="nav-left">
        <NavLink to="/" className="logo">
          LIZAVETA SVIRSHCHYK
        </NavLink>
        <span>commercial photography</span>
      </div>
      <div className="nav-right">
        <div className={`nav-links ${isNavOpen && "open"}`}>
          <NavbarLink to="/" label="HOME" closeMenu={closeMenu} />
          <NavbarLink to="/portfolio" label="PORTFOLIO" closeMenu={closeMenu} />
          <NavbarLink to="/about" label="ABOUT" closeMenu={closeMenu} />
          <NavLink to="/contact" className="contact-button" onClick={closeMenu}>
            CONTACT
          </NavLink>
        </div>
      </div>
      <button
        className={`hamburger ${isNavOpen ? "open" : ""}`}
        onClick={handleToggle}
      >
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </button>
    </nav>
  );
};

export default Navbar;
