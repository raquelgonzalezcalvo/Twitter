import { NavLink } from "react-router-dom";

import "../styles/layout/HeaderMenuItem.scss";
const HeaderMenuItem = ({ text, href, liClass }) => {
  return (
    <li className={`menu__item menu__item--${liClass}`}>
      <NavLink className="menu__link" to={href} title={text}>
        <span className="text">{text}</span>
      </NavLink>
    </li>
  );
};
export default HeaderMenuItem;
