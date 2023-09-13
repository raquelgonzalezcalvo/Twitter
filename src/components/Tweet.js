import "../styles/layout/Tweet.scss";

const Tweet = ({ tweet }) => {
  return (
    <li>
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
};
export default Tweet;
