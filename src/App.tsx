import React, { FC } from "react";
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./views/Home/Home";
import QuotesPage from "./views/Quotes/Quotes";
import TimelinePage from "./views/TimelinePage/TimelinePage";
import GameSaves from "./views/GameSaves/GameSaves";
import LockedHome from "./views/LockedHome/LockedHome";
import "./App.css";
import "./queries.css";
import "./assets/fonts/basisgrotesquepro/style.css";
import { useUser } from "./requests/user/useUser";

const App: FC = () => {
  const { user, isLogged, isLoading } = useUser();

  // if(isLoading) {
  //   return null
  // }

  if(!user) {
    return <LockedHome />
  }

  return (
      <Router>
        <div className="app">
          <main>
            <Navbar />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/quotes"><QuotesPage /></Route>
              <Route
                path="/gamesaves"
              ><GameSaves /></Route>
              <Route
                path="/timeline"
              ><TimelinePage /></Route>
              <Route path="/unauth" component={LockedHome} />
            </Switch>
          </main>
        </div>
      </Router>
  );
};
export default App;
