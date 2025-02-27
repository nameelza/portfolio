import { useState } from "react";
import { NavLink } from "react-router-dom";
import Dropdown from "./Dropdown";
import { motion } from "framer-motion";

const NavbarLink = ({ to, label, closeMenu }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `nav-link ${isActive && "active"} ${
        label === "portfolio" && "portfolio-link"
      }`
    }
    onClick={closeMenu}
  >
    {label}
    {label === "PORTFOLIO" && <Dropdown />}
  </NavLink>
);

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isNavClosing, setIsNavClosing] = useState(false);

  const handleToggle = () => {
    if (isNavOpen) {
      setIsNavClosing(true);
      setTimeout(() => {
        setIsNavOpen(false);
        setIsNavClosing(false);
      }, 300);
    } else {
      setIsNavOpen(true);
    }
  };

  const closeMenu = () => {
    setIsNavOpen(false);
  };

  return (
    <nav>
      <motion.div
        className="nav-left"
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.5 }}
      >
        <NavLink to="/" className="logo">
          LIZAVETA SVIRSHCHYK
        </NavLink>
        <span>commercial photography</span>
      </motion.div>
      <motion.div
        className="nav-right"
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.5 }}
      >
        <div
          className={`nav-links ${isNavOpen && "open"} ${
            isNavClosing && "closing"
          }`}
        >
          <NavbarLink to="/" label="HOME" closeMenu={closeMenu} />
          <NavbarLink to="/portfolio" label="PORTFOLIO" closeMenu={closeMenu} />
          <NavbarLink to="/about" label="ABOUT" closeMenu={closeMenu} />
          <NavbarLink to="/contact" label="CONTACT ME" closeMenu={closeMenu} />
        </div>
      </motion.div>
      <button
        className={`hamburger ${isNavOpen && !isNavClosing && "open"}`}
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
