const Navbar = () => {
  return (
    <nav>
      <div className="nav-left">
        <a href="/" className="logo">
          PHOTOGRAPHER(LOGO)
        </a>
      </div>
      <div className="nav-right">
        <ul className="nav-links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
