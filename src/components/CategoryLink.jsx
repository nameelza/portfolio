import { NavLink } from "react-router-dom";

const CategoryLink = ({ to, label, src, imgAlt }) => {
  return (
    <NavLink to={to} className="sub-category">
      <span>{label}</span>
      <img src={src} alt={imgAlt} />
    </NavLink>
  );
};

export default CategoryLink;
