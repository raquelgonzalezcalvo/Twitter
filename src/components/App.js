import "../styles/App.scss";

function App() {
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
              <a className="menu__link" href="#" title="Twittear">
                <span className="text">Twittear</span>
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main class="main">
        <section class="main__header">
          <header>
            <h1 class="header__title">
              <span class="header__account">Adalab</span>
              <span class="header__tweets">6.762 Tweets</span>
            </h1>

            <img
              src="./assets/images/adalab-banner.jpg"
              alt="Banner de Adalab"
            />

            <div class="header__content">
              <div class="header__profile-image">
                <img
                  src="./assets/images/adalab-logo.png"
                  alt="Imagen de perfil de Adalab"
                />
              </div>

              <div class="header__actions">
                <button class="header__follow-btn">Siguiendo</button>
              </div>

              <div class="header__account-info">
                <span class="header__acount-title">Adalab</span>
                <span class="header__acount-username">@Adalab_Digital</span>
                <span class="header__acount-follow">Te sigue</span>
              </div>

              <h2 class="header__account-description">
                👩‍💻 Tecnóloga mujer Escuela de programación web para mujeres.{" "}
                <br />
                📅 Calendario espiralado Próximo curso: noviembre 2021. <br />
                📌 Clases online en directo.
                <br />
                🚀 Aprende a programar en solo 12 semanas.
              </h2>

              <div class="header__account-data">
                <span class="header__account-region">
                  Madrid, Comunidad de Madrid
                </span>
                <a class="header__account-link" href="https://adalab.es">
                  adalab.es
                </a>
                <span class="header__account-date">
                  Se unió en agosto de 2016
                </span>
              </div>

              <div class="header__followers-info">
                <span class="header__following">
                  <span class="header__followers-number">1.908</span> Siguiendo
                </span>
                <span class="header__followers">
                  <span class="header__followers-number">5.601</span> Seguidores
                </span>
              </div>
            </div>
          </header>
        </section>
      </main>
    </div>
  );
}

export default App;
