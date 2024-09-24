const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <p>
        Lisa Svirshchyk | San Francisco Bay Area based commercial product &
        lifestyle photographer.
      </p>
      <p>lizasvirshchyk@gmail.com</p>
      <p>*instagram link*</p>
      <p>© {currentYear} Lizaveta Svirshchyk</p>
    </footer>
  );
};

export default Footer;
