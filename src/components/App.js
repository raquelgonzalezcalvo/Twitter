import "../styles/App.scss";
import getTweets from "../services/api";
import ls from "../services/ls";
import Profile from "./Profile";

//images
import { useState, useEffect } from "react";
import Header from "./Header";
import ComposeModal from "./ComposeModal";
import Tweets from "./Tweets";

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

  return (
    <div className="page">
      <Header handleCompose={handleCompose} />
      <main className="main">
        <Profile />
        <Tweets tweets={tweets} />
        {renderComposeModal()}
      </main>
    </div>
  );
}

export default App;
