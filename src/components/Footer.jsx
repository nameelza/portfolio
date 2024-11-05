const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <p className="small">
        Lizaveta Svirshchyk | San Francisco Bay Area based commercial product &
        lifestyle photographer.
      </p>
      <p className="big">lizasvirshchyk@gmail.com</p>
      <p className="small">© {currentYear} Lizaveta Svirshchyk</p>
    </footer>
  );
};

export default Footer;
