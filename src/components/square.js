import React, { useState, useEffect, useContext } from "react";
import io from "socket.io-client";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GameContext } from "../context";

const SquareStyle = styled.div`
  border: solid black 2px;
  width: 100%;
  height: 50px;
`;

const Square = ({ id, hasShip }) => {
  const { hits, setHits } = useContext(GameContext);
  let [state, setState] = useState(false);
  let [hit, setHit] = useState("MISS");
  let [color, setColor] = useState("grey");

  const endpoint = "localhost:8080";
  const socket = io(endpoint);

  const launchMissle = target => {
    socket.emit("LAUNCH_MISSLE", {
      target
    });
  };

  useEffect(() => {
    if (state && hasShip) {
      setHit("HIT");
      setColor("salmon");
      setHits(hits + 1);
    }
  }, [state]);

  return (
    <SquareStyle
      style={{ backgroundColor: color }}
      onClick={() => {
        setState(true);
        launchMissle(id, hasShip);
      }}
    >
      {state ? hit : id}
    </SquareStyle>
  );
};

export default Square;
