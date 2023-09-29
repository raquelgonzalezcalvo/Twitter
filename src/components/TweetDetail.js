import { Link } from "react-router-dom";
import "../styles/layout/TweetDetail.scss";
const TweetDetail = ({ tweet }) => {
  const handleBackButton = () => {
    window.history.back();
  };
  return (
    <section className="tweet-detail">
      <header className="tweet-detail__header">
        <button
          className="tweet-detail__back-btn"
          onClick={handleBackButton}
          to="/"
        >
          <span>Volver atrás</span>
        </button>
        <h2 className="tweet-detail__header-title">Tweet</h2>
      </header>
      <article className="tweet-detail__content">
        <p className="tweet-detail__user-info">
          <img
            className="tweet-detail__avatar"
            src={tweet.avatar}
            alt={`Avatar de ${tweet.user}`}
          />
          <span>
            <span className="tweet-detail__user">{tweet.user}</span>
            <span className="tweet-detail__username">@{tweet.username}</span>
          </span>
        </p>
        <p className="tweet-detail__text">{tweet.text}</p>
        <span className="tweet-detail__date">{tweet.date}</span>
        <ul className="tweet-detail__actions">
          <li className="tweet-detail__action">
            {tweet.retweets}{" "}
            <span className="tweet-detail__actions-text">Retweets</span>
          </li>
          <li className="tweet-detail__action">
            {tweet.comments}{" "}
            <span className="tweet-detail__actions-text">Comentarios</span>
          </li>
          <li className="tweet-detail__action">
            {tweet.likes}{" "}
            <span className="tweet-detail__actions-text">Me gusta</span>
          </li>
        </ul>
      </article>
    </section>
  );
};

export default TweetDetail;
