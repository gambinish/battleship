import React from "react";

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
