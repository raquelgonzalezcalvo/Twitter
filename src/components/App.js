import { useState, useEffect } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";

//services
import getTweets from "../services/api";
import ls from "../services/ls";
//components
import Profile from "./Profile";
import Header from "./Header";
import ComposeModal from "./ComposeModal";
import Tweets from "./Tweets";
import Search from "./Search";
import Home from "./Home";
import TweetDetail from "./TweetDetail";
//styles
import "../styles/App.scss";

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
  const handleComposeText = (value) => {
    console.log("has escrito algo");
    setComposeText(value);
  };

  const handleComposeSubmit = () => {
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
    if (composeOpen === true) {
      return (
        <ComposeModal
          handleCompose={handleCompose}
          handleComposeText={handleComposeText}
          handleComposeSubmit={handleComposeSubmit}
          composeText={composeText}
        />
      );
    }
  };
  const routeTweetData = useRouteMatch("/tweet/:tweetId");

  const getRouteTweet = () => {
    if (routeTweetData) {
      const routeTweetId = routeTweetData.params.tweetId;
      const routeTweet = tweets.find((tweet) => {
        return tweet.id === routeTweetId;
      });
      if (routeTweet) {
        return routeTweet;
      } else {
        return {};
      }
    }
  };

  return (
    <div className="page">
      <Header handleCompose={handleCompose} />
      <main className="main">
        <Switch>
          <Route path="/" exact>
            <Home />
            <Tweets tweets={tweets} />
          </Route>
          <Route path="/search">
            <Search />
            <Tweets tweets={tweets} />
          </Route>
          <Route path="/profile">
            <Profile />
            <Tweets tweets={tweets} />
          </Route>
          <Route path="/tweet/:tweetId">
            <TweetDetail tweet={getRouteTweet()} />
          </Route>
        </Switch>

        {renderComposeModal()}
      </main>
    </div>
  );
}

export default App;
