import HeaderMenuButton from "./HeaderMenuButton";
import HeaderMenuItem from "./HeaderMenuItem";
const Header = ({ handleCompose }) => {
  return (
    <header className="header">
      <nav className="menu">
        <ul className="menu__items">
          <HeaderMenuItem text="Ir al inicio" href="/home" liClass="twitter" />
          <HeaderMenuItem text="Ir al inicio" href="/home" liClass="home" />
          <HeaderMenuItem text="Buscar" href="/search" liClass="search" />
          <HeaderMenuItem
            text="Perfil"
            href="/profile"
            liClass="profile
              "
          />

          <HeaderMenuButton
            handleClick={handleCompose}
            text="Twittear"
            liClass="tweet"
          />
        </ul>
      </nav>
    </header>
  );
};
export default Header;
