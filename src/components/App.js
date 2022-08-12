/*
React Widgets Part 2:
- Create a new react project using the CRA toolchain
- You get to choose 7 coding challenges (other than the part 1 exercises) for your components this time.
- Use react-router-dom 5 to route to each widget separately. They won't all be mounted at the same time like part 1.
- Use SCSS and style up your nav bar and components. Nothing fancy, but make it look decent.
- Submit your Code via github.
*/

import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { useState, useEffect } from "react";

import "../styles/main.scss";
import NavBar from "./navigation/NavBar";
import MotivationalPoster from "./widgets/MotivationalPoster";
import WeeksLeft from "./widgets/WeeksLeft";
import BoxShadow from "./widgets/BoxShadow";
import Hangman from "./widgets/Hangman";

function App() {
  const [image, setImage] = useState("");
  const [quote, setQuote] = useState("");
  const [refresh, setRefresh] = useState(true);
  const [loadedQuote, setLoadedQuote] = useState("");

  // const quoteStorage = localStorage.getItem("quotes");

  return (
    <div className="app">
      <Router>
        <Route path="*" component={NavBar} />

        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <div className="home">
                <h1>Welcome to Widgets Pt. 2!</h1>
              </div>
            )}
          />

          <Route
            path={"/motivational-poster"}
            render={(props) => (
              <MotivationalPoster
                {...props}
                image={image}
                setImage={setImage}
                quote={quote}
                setQuote={setQuote}
                refresh={refresh}
                setRefresh={setRefresh}
                loadedQuote={loadedQuote}
                setLoadedQuote={setLoadedQuote}
              />
            )}
          />
          <Route path={"/weeks-left"} component={WeeksLeft} />
          <Route path={"/box-shadow"} component={BoxShadow} />
          <Route path={"/hangman"} component={Hangman} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
