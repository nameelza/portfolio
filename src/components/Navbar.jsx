import { useState } from "react";
import { NavLink } from "react-router-dom";
import Dropdown from "./Dropdown";

const NavbarLink = ({ to, label }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `nav-link ${isActive && "active"} ${(label =
        "portfolio" && "portfolio-link")}`
    }
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
          <NavbarLink to="/" label="HOME" />
          <NavbarLink to="/portfolio" label="PORTFOLIO" />
          <NavbarLink to="/about" label="ABOUT" />
          <NavLink to="/contact" className="contact-button">
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
