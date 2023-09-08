const HeaderMenuButton = ({ handleClick, text, liClass }) => {
  const handleButtonClick = () => {
    handleClick();
  };
  return (
    <li className={`menu__item menu__item--${liClass}`}>
      <button
        className="menu__link"
        href="#"
        title={text}
        onClick={handleButtonClick}
      >
        <span className="text">{text}</span>
      </button>
    </li>
  );
};
export default HeaderMenuButton;
