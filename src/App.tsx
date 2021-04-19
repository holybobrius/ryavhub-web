import React, { FC } from 'react';
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
import LoginModal from './components/LoginModal';
import './styles/App.css';
import './theme.css'; //ant precompiled theme

const App: FC = () => {
  const onClick = (): void => {
    console.log('пидорасы уебки')
  }

  return (
    <Router>
      <div className="app">
        <Navbar onClick={onClick}/>
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/quotes" component={Quotes} />
            <Route path="/timeline" component={TimelinePage} />
            <Route path="/gamesaves" component={GameSaves} />
          </Switch>
        </main>
        <LoginModal/>
      </div>
    </Router>
  );
}
export default App
