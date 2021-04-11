import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Navbar from './components/Navbar';
import Home from './views/Home';
import Quotes from './views/Quotes';
import Timeline from "./views/Timeline";
import GameSaves from "./views/GameSaves"
import './styles/App.css';

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/quotes">
          <Quotes />
        </Route>
        <Route path="/timeline">
          <Timeline />
        </Route>
        <Route path="/gamesaves">
          <GameSaves />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
