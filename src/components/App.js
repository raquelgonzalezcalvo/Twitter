import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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

   return (
     <div className="page">
    {/*    <Router> */}
         <Header handleCompose={handleCompose} />
         <main className="main">
           <Routes>
             <Route path="/" element={<Home />} />
             <Route path="/search" element={<Search />} />
             <Route path="/profile" element={<Profile />} />
           </Routes>
           <Tweets tweets={tweets} />
           {renderComposeModal()}
         </main>
      {/*  </Router> */}
     </div>
   );
}

export default App;
