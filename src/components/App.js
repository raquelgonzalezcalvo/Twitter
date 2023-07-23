import "../styles/App.scss";

//images
import adalabLogo from "../images/adalab-logo.png";
import adalabBanner from "../images/adalab-banner.jpg";
import { useState } from "react";

function App() {
  //variables

  const [composeOpen, setComposeOpen] = useState(false);

  function handleCompose() {
    setComposeOpen(!composeOpen);
    console.log(composeOpen);
  }
  const renderComposeModal = () => {
    if (composeOpen === true) {
      return (
        <div className="compose__modal-overlay">
          <div className="compose__modal-wrapper">
            <div className="compose__modal-header">
              <button
                className="compose__modal-close-btn"
                onClick={handleCompose}
              >
                Cerrar
              </button>
            </div>
            <div className="compose__modal-content">
              <img
                className="compose__profile-logo"
                src={adalabLogo}
                alt="Logo de Adalab"
              />
              <textarea
                className="compose__profile-textarea"
                placeholder="¿Qué está pasando?"
              />
            </div>
            <div className="compose__modal-footer">
              <button className="compose__modal-tweet-btn" disabled>
                Twittear
              </button>
            </div>
          </div>
        </div>
      );
    }
  };
  return (
    <div className="page">
      <header className="header">
        <nav className="menu">
          <ul className="menu__items">
            <li className="menu__item menu__item--twitter">
              <a className="menu__link" href="#" title="Ir">
                <span className="text">Ir al inicio</span>
              </a>
            </li>

            <li className="menu__item menu__item--home">
              <a className="menu__link" href="#" title="Ir">
                <span className="text">Ir al inicio</span>
              </a>
            </li>

            <li className="menu__item menu__item--search">
              <a className="menu__link" href="#" title="Buscar">
                <span className="text">Buscar</span>
              </a>
            </li>

            <li className="menu__item menu__item--profile">
              <a className="menu__link" href="#" title="Perfil">
                <span className="text">Perfil</span>
              </a>
            </li>

            <li className="menu__item menu__item--tweet">
              <button
                className="menu__link"
                href="#"
                title="Twittear"
                onClick={handleCompose}
              >
                <span className="text">Twittear</span>
              </button>
            </li>
          </ul>
        </nav>
      </header>

      <main className="main">
        <section className="main__header">
          <header>
            <h1 className="header__title">
              <span className="header__account">Adalab</span>
              <span className="header__tweets">6.762 Tweets</span>
            </h1>

            <img src={adalabBanner} alt="Banner de Adalab" />

            <div className="header__content">
              <div className="header__profile-image">
                <img src={adalabLogo} alt="Imagen de perfil de Adalab" />
              </div>

              <div className="header__actions">
                <button className="header__follow-btn">Siguiendo</button>
              </div>

              <div className="header__account-info">
                <span className="header__acount-title">Adalab</span>
                <span className="header__acount-username">@Adalab_Digital</span>
                <span className="header__acount-follow">Te sigue</span>
              </div>

              <h2 className="header__account-description">
                👩‍💻 Tecnóloga mujer Escuela de programación web para mujeres.{" "}
                <br />
                📅 Calendario espiralado Próximo curso: noviembre 2021. <br />
                📌 Clases online en directo.
                <br />
                🚀 Aprende a programar en solo 12 semanas.
              </h2>

              <div className="header__account-data">
                <span className="header__account-region">
                  Madrid, Comunidad de Madrid
                </span>
                <a className="header__account-link" href="https://adalab.es">
                  adalab.es
                </a>
                <span className="header__account-date">
                  Se unió en agosto de 2016
                </span>
              </div>

              <div className="header__followers-info">
                <span className="header__following">
                  <span className="header__followers-number">1.908</span>{" "}
                  Siguiendo
                </span>
                <span className="header__followers">
                  <span className="header__followers-number">5.601</span>{" "}
                  Seguidores
                </span>
              </div>
            </div>
          </header>
        </section>
        {renderComposeModal()}
      </main>
    </div>
  );
}

export default App;
