import { FC } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Navbar from './components/Navbar/Navbar';
import Home from './views/Home/Home';
import Quotes from './views/Quotes/Quotes';
import TimelinePage from "./views/Timeline/Timeline";
import GameSaves from "./views/GameSaves/GameSaves"
import './App.css';
import './assets/fonts/basisgrotesquepro/style.css';
import LockedHome from './views/LockedHome/LockedHome';
import store from './store';
import { useSelector } from 'react-redux';

const App: FC = () => {
  const reduxStore = store.getState()
  return (
    <Router>
      <div className="app">
        <Navbar/>
        <main>
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
}
export default App
