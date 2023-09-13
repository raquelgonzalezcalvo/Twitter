import Tweet from "../components/Tweet";
const Tweets = ({ tweets }) => {
  const renderTweets = () => {
    return tweets.map((tweet) => {
      return <Tweet tweet={tweet} key={tweet.id} />;
    });
  };
  return <ul>{renderTweets()}</ul>;
};
export default Tweets;
