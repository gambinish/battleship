import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import { GameContext } from "./context";

import GameOver from "./components/start";
import Board from "./components/board";
import ChatRoom from "./components/chat";

const App = () => {
  const { hits, setHits } = useContext(GameContext);

  return (
    <React.Fragment>
      <div className="App">
        <h1>This is Battleship</h1>
        <Router>
          {hits !== 8 ? (
            <React.Fragment />
          ) : (
            <Link
              onClick={() => {
                setHits(0);
              }}
              to="/game"
            >
              Reset Game
            </Link>
          )}
          <br />
          <br />
          <Link
            onClick={() => {
              setHits(8);
            }}
            to="/game-over"
          >
            End Game
          </Link>
          <br />
          <br />
          {hits === 8 ? (
            <Route path="/game" render={GameOver} />
          ) : (
            <Route path="/game" render={Board} />
          )}
          <Route path="/game-over" render={GameOver} />
        </Router>
      </div>
      <ChatRoom />
    </React.Fragment>
  );
};

export default App;
