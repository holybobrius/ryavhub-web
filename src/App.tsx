import React, { FC, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Navbar from './components/Navbar';
import Home from './views/Home';
import Quotes from './views/Quotes';
import TimelinePage from "./views/Timeline";
import GameSaves from "./views/GameSaves"
import LoginModal from './components/LoginModal';
import './styles/App.css';
import './theme.css';

const App: FC = () => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  return (
    <Router>
      <div className="app">
        <Navbar onClick={() => setIsModalVisible(true)}></Navbar>
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/quotes" component={Quotes} />
            <Route path="/timeline" component={TimelinePage} />
            <Route path="/gamesaves" component={GameSaves} />
          </Switch>
        </main>
        <LoginModal opened={isModalVisible} closeClicked={() => setIsModalVisible(false)}/>
      </div>
    </Router>
  );
}
export default App