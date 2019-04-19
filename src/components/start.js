import React from "react";
import { BrowserRouter as Link } from "react-router-dom";

const GameOver = () => (
  <div>
    <button
      onClick={() => {
        console.log("click me");
      }}
    >
      <h2>Game Over!</h2>
      <h3>Thanks for playing...</h3>
    </button>
  </div>
);

export default GameOver;
