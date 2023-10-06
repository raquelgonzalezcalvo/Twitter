import { useState, useEffect } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";

//services
import api from "../services/api";
import ls from "../services/ls";
import date from "../services/date";
//components
import Profile from "./Profile";
import Header from "./Header";
import ComposeModal from "./ComposeModal";
import Tweets from "./Tweets";
import Search from "./Search";
import Home from "./Home";
import TweetDetail from "./TweetDetail";
import Loader from "./Loader";
//styles
import "../styles/App.scss";

function App() {
  //variables
  const [composeOpen, setComposeOpen] = useState(false);
  const [composeText, setComposeText] = useState(ls.get("composeText", ""));
  const [tweets, setTweets] = useState([]);
  const [showLoading, setShowLoading] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [profile, setProfile] = useState({});

  useEffect(() => {
    ls.set("composeText", composeText);
  }, [composeText]);

  useEffect(() => {
    setShowLoading(true);
    api.getTweets().then((data) => {
      setShowLoading(false);
      setTweets(data);
    });
  }, []);

  useEffect(() => {
    setShowLoading(true);
    api.getProfile().then((data) => {
      setProfile(data);
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
      id: crypto.randomUUID(),
      avatar: "http://localhost:3000/assets/avatars/user-4.jpg",
      user: "Adalab",
      username: "Adalab_digital",
      date: date.getCurrentDate(),
      text: composeText,
      comments: 0,
      retweets: 0,
      likes: 0,
    });
    setTweets([...tweets]);
    setComposeOpen(false);
    setComposeText("");
  };

  const handleSearchText = (searchText) => {
    setSearchText(searchText);
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

  const getFilterTweets = () => {
    return tweets.filter((tweet) => {
      return (
        tweet.text.toLowerCase().includes(searchText.toLocaleLowerCase()) ||
        tweet.user.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
      );
    });
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
            <Search
              searchText={searchText}
              handleSearchText={handleSearchText}
            />
            <Tweets tweets={getFilterTweets()} />
          </Route>
          <Route path="/profile">
            <Profile profile={profile} />
            <Tweets tweets={tweets} />
          </Route>
          <Route path="/tweet/:tweetId">
            <TweetDetail tweet={getRouteTweet()} />
          </Route>
        </Switch>

        {renderComposeModal()}
      </main>
      <Loader showLoading={showLoading} />
    </div>
  );
}

export default App;
