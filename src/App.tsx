import { FC } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./views/Home/Home";
import QuotesPage from "./views/Quotes/Quotes";
import TimelinePage from "./views/TimelinePage/TimelinePage";
import GameSaves from "./views/GameSaves/GameSaves";
import LockedHome from "./views/LockedHome/LockedHome";
import { GuardedRoute } from "./hocs/GuardedRoute";
import { useIsAuthorized } from "./hooks/useIsAuthorized";
import "./App.css";
import "./queries.css";
import "./assets/fonts/basisgrotesquepro/style.css";
import { GoogleOAuthProvider } from "@react-oauth/google";

const App: FC = () => {
   const isAuthorized = useIsAuthorized();

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
                        auth={isAuthorized}
                        render={(props) => <Home {...props} />}
                     />
                     <GuardedRoute
                        path="/quotes"
                        auth={isAuthorized}
                        render={(props) => <QuotesPage {...props} />}
                     />
                     <GuardedRoute
                        path="/gamesaves"
                        auth={isAuthorized}
                        render={(props) => <GameSaves {...props} />}
                     />

                     <GuardedRoute
                        path="/timeline"
                        auth={isAuthorized}
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
