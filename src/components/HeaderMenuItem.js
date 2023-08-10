const HeaderMenuItem = ({ text, href, liClass }) => {
  return (
    <li className={`menu__item menu__item--${liClass}`}>
      <a className="menu__link" href={href} title={text}>
        <span className="text">{text}</span>
      </a>
    </li>
  );
};
export default HeaderMenuItem;
