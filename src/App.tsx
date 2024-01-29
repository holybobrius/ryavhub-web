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
import { CringePg } from "./views/CringePG/CringePg";
import { CringePgAdmin } from "./views/CringePGAdmin/CringePgAdmin";
import { useUser } from "./requests/user/useUser";
import { ConfigProvider } from "antd";
import { useGetUserQuery } from "./requests/user/userApi";

const App: FC = () => {
  const { data: user, isLoading } = useGetUserQuery();

  return (
    <GoogleOAuthProvider clientId="68682133883-jnc71s26jtmqdq98klupgeienssmpbr2.apps.googleusercontent.com">
      <Router>
        <ConfigProvider
          theme={{
            components: {
              Modal: {
                contentBg: "#17171D",
                fontFamily: "Basis Grotesque Pro",
              },
              Checkbox: {
                colorText: "#fff",
              },
            },
          }}
        >
          <div className="app">
            <main>
              <Navbar />
              {!isLoading && (
                <Switch>
                  <GuardedRoute
                    exact
                    path="/"
                    auth={!!user}
                    render={(props) => <Home {...props} />}
                  />
                  <GuardedRoute
                    path="/quotes"
                    auth={!!user}
                    render={(props) => <QuotesPage {...props} />}
                  />
                  <GuardedRoute
                    path="/gamesaves"
                    auth={!!user}
                    render={(props) => <GameSaves {...props} />}
                  />
                  <GuardedRoute
                    path="/timeline"
                    auth={!!user}
                    render={(props) => <TimelinePage {...props} />}
                  />
                  <GuardedRoute
                    path="/cringepg"
                    auth={!!user}
                    render={(props) => <CringePg {...props} />}
                  />
                  <GuardedRoute
                    path="/cringepg-admin"
                    auth={!!user}
                    render={(props) => <CringePgAdmin {...props} />}
                  />
                  <Route path="/unauth" component={LockedHome} />
                </Switch>
              )}
            </main>
          </div>
        </ConfigProvider>
      </Router>
    </GoogleOAuthProvider>
  );
};
export default App;
