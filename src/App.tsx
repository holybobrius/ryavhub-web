import { FC } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./views/Home/Home";
import Quotes from "./views/Quotes/Quotes";
import TimelinePage from "./views/TimelinePage/TimelinePage";
import GameSaves from "./views/GameSaves/GameSaves";
import "./App.css";
import "./queries.css";
import "./assets/fonts/basisgrotesquepro/style.css";

const App: FC = () => {
  return (
    <Router>
      <div className="app">
        <main>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/quotes" component={Quotes} />
            <Route path="/timeline" component={TimelinePage} />
            <Route path="/gamesaves" component={GameSaves} />
          </Switch>
        </main>
      </div>
    </Router>
  );
};
export default App;
