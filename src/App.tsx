import { FC } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Navbar from './components/Navbar';
import Home from './views/Home';
import Quotes from './views/Quotes';
import TimelinePage from "./views/Timeline";
import GameSaves from "./views/GameSaves"
import './App.css';
import './theme.css';
import './assets/fonts/basisgrotesquepro/style.css';

const App: FC = () => {
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
