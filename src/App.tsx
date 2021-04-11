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
      <div className="app">
        <Navbar></Navbar>
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/quotes" component={Quotes} />
            <Route path="/timeline" component={Timeline} />
            <Route path="/gamesaves" component={GameSaves} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
