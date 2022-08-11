/*
React Widgets Part 2:
- Create a new react project using the CRA toolchain
- You get to choose 7 coding challenges (other than the part 1 exercises) for your components this time.
- Use react-router-dom 5 to route to each widget separately. They won't all be mounted at the same time like part 1.
- Use SCSS and style up your nav bar and components. Nothing fancy, but make it look decent.
- Submit your Code via github.
*/

import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import "../styles/main.scss";
import NavBar from "./navigation/NavBar";
import MotivationalPoster from "./widgets/MotivationalPoster";
import DaysLeft from "./widgets/DaysLeft";

function App() {
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

          <Route path={"/motivational-poster"} component={MotivationalPoster} />
          <Route path={"/days-left"} component={DaysLeft} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
