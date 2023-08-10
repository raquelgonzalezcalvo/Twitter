import "../styles/App.scss";
import getTweets from "../services/api";
import ls from "../services/ls";
import MainHeader from "./MainHeader";
import HeaderMenuItem from "./HeaderMenuItem";

//images
import adalabLogo from "../images/adalab-logo.png";
import { useState, useEffect } from "react";

function App() {
  //variables

  const [composeOpen, setComposeOpen] = useState(false);
  const [composeText, setComposeText] = useState(ls.get("composeText", ""));
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    ls.set("composeText", composeText);
  }, [composeText]);

  useEffect(() => {
    getTweets().then((data) => {
      setTweets(data);
    });
  }, []);

  function handleCompose() {
    setComposeOpen(!composeOpen);
    console.log(composeOpen);
  }
  const handleComposeText = (ev) => {
    console.log("has escrito algo");
    setComposeText(ev.target.value);
  };

  const handleComposeSubmit = (ev) => {
    ev.preventDefault();
    tweets.unshift({
      id: "dsgfdsjfg",
      avatar: "http://localhost:3000/assets/avatars/user-4.jpg",
      user: "Adalab",
      username: "Adalab_digital",
      date: "8 sep. 2021",
      text: composeText,
      comments: 0,
      retweets: 0,
      likes: 0,
    });
    setTweets([...tweets]);
    setComposeOpen(false);
    setComposeText("");
  };
  const renderComposeModal = () => {
    const isButtonDisabled = composeText.length === 0;
    if (composeOpen === true) {
      return (
        <div className="compose__modal-overlay">
          <form onSubmit={handleComposeSubmit}>
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
                  value={composeText}
                  onChange={handleComposeText}
                />
              </div>
              <div className="compose__modal-footer">
                <button
                  className="compose__modal-tweet-btn"
                  disabled={isButtonDisabled}
                >
                  Twittear
                </button>
              </div>
            </div>
          </form>
        </div>
      );
    }
  };

  const renderHeader = () => {
    return (
      <header className="header">
        <nav className="menu">
          <ul className="menu__items">
            <HeaderMenuItem
              text="Ir al inicio"
              href="/home"
              liClass="twitter"
            />
            <HeaderMenuItem text="Ir al inicio" href="/home" liClass="home" />
            <HeaderMenuItem text="Buscar" href="/search" liClass="search" />
            <HeaderMenuItem
              text="Perfil"
              href="/profile"
              liClass="profile
            "
            />

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
    );
  };

  const renderTweets = () => {
    return tweets.map((tweet) => {
      return (
        <li key={tweet.id}>
          <article className="tweet__wrapper">
            <img
              className="tweet__avatar"
              src={tweet.avatar}
              alt={`Avatar de ${tweet.user}`}
            />
            <div className="tweet__content">
              <p className="tweet__info">
                <span className="tweet__user">{tweet.user}</span>
                <span className="tweet__username">@{tweet.username}</span>
                <span className="tweet__date">{tweet.date}</span>
              </p>
              <p className="tweet__text">{tweet.text}</p>
              <ul className="tweet__actions">
                <li className="tweet__comments">{tweet.comments}</li>
                <li className="tweet__retweets">{tweet.retweets}</li>
                <li className="tweet__likes">{tweet.likes}</li>
                <li className="tweet__share">
                  <span className="tweet__share--text">Compartir</span>
                </li>
              </ul>
            </div>
          </article>
        </li>
      );
    });
  };
  return (
    <div className="page">
      {renderHeader()}
      <main className="main">
        <MainHeader />
        <ul>{renderTweets()}</ul>
        {renderComposeModal()}
      </main>
    </div>
  );
}

export default App;
