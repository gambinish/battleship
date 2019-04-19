import React, { useContext, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import "./App.css";
import { GameContext } from "./context";

import GameOver from "./components/start";
import Board from "./components/board";

const App = () => {
  const { hits } = useContext(GameContext);
  let redirectToHome;
  useEffect(() => {
    console.log(hits);
    // trying to redirect to a clean slate after reaching 8 hits
    if (hits === 8) {
      // hack:
      // window.location.pathname = '/game-over';
      // trying to accomplish ^^^ without page reloading
      redirectToHome = <Redirect to={Board} />;
    }
  }, [hits]);

  return (
    <div className="App">
      <h1>This is Battleship</h1>
      <Router>
        <div>{redirectToHome}</div>
        <Link to="/game">Start Game</Link>
        <br />
        <br />
        <Link to="/game-over">End Game</Link>
        <Route path="/game" render={Board} />
        <Route path="/game-over" render={GameOver} />
      </Router>
    </div>
  );
};

export default App;
