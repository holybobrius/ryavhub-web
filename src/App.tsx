import { FC } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./views/Home/Home";
import QuotesPage from "./views/Quotes/Quotes";
import TimelinePage from "./views/TimelinePage/TimelinePage";
import GameSaves from "./views/GameSaves/GameSaves";
import LockedHome from "./views/LockedHome/LockedHome";
import { GuardedRoute } from "./hocs/GuardedRoute";
import "./App.css";
import "./queries.css";
import "./assets/fonts/basisgrotesquepro/style.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { useUser } from "./requests/user/useUser";

const App: FC = () => {
  const user = useUser();

  return (
    <GoogleOAuthProvider clientId="68682133883-jnc71s26jtmqdq98klupgeienssmpbr2.apps.googleusercontent.com">
      <Router>
        <div className="app">
          <main>
            <Navbar />
            <Switch>
              <GuardedRoute
                exact
                path="/"
                auth={window.location.hostname === "localhost" ? true : !!user}
                render={(props) => <Home {...props} />}
              />
              <GuardedRoute
                path="/quotes"
                auth={window.location.hostname === "localhost" ? true : !!user}
                render={(props) => <QuotesPage {...props} />}
              />
              <GuardedRoute
                path="/gamesaves"
                auth={window.location.hostname === "localhost" ? true : !!user}
                render={(props) => <GameSaves {...props} />}
              />

              <GuardedRoute
                path="/timeline"
                auth={window.location.hostname === "localhost" ? true : !!user}
                render={(props) => <TimelinePage {...props} />}
              />
              <Route path="/unauth" component={LockedHome} />
            </Switch>
          </main>
        </div>
      </Router>
    </GoogleOAuthProvider>
  );
};
export default App;
