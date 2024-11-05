import { NavLink } from "react-router-dom";

const NavbarLink = ({ to, label }) => (
  <NavLink
    to={to}
    className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
  >
    {label}
  </NavLink>
);

const Navbar = () => {
  return (
    <nav>
      <div className="nav-left">
        <NavLink to="/" className="logo">
          LIZAVETA SVIRSHCHYK
        </NavLink>
        <span>commercial photography</span>
      </div>
      <div className="nav-right">
        <div className="nav-links">
          <NavbarLink to="/" label="Home" />
          <NavbarLink to="/portfolio" label="Portfolio" />
          <NavbarLink to="/about" label="About" />
          <NavbarLink to="/contact" label="Contact" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
