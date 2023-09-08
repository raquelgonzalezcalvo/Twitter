import "../styles/App.scss";
import getTweets from "../services/api";
import ls from "../services/ls";
import MainHeader from "./MainHeader";
import HeaderMenuItem from "./HeaderMenuItem";

//images
import adalabLogo from "../images/adalab-logo.png";
import { useState, useEffect } from "react";
import Tweet from "./Tweet";
import HeaderMenuButton from "./HeaderMenuButton";

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

  const renderTweets = () => {
    return tweets.map((tweet) => {
      return <Tweet tweet={tweet} key={tweet.id} />;
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
