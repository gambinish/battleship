import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";

export const GameContext = React.createContext();

export const ContextProvider = ({ children }) => {
  const [hits, setHits] = useState(0);
  return (
    <GameContext.Provider value={{ hits, setHits }}>
      {children}
    </GameContext.Provider>
  );
};
