import React from "react";
import io from "socket.io-client";
import styled from "styled-components";
import boardData from "../data/boardData";

import Square from "./square";

const BoardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 12%);
  gird-template-rows: repeat(8, 12%);
  justify-content: center;
  margin: auto;
  width: 50%;
  padding: 2px;
`;

const Board = () => {
  const endpoint = "localhost:8080";
  const socket = io(endpoint);
  socket.on("RECEIVE_MISSLE", data => {
    console.log(data);
    // setTargets([...targets, data.id]);
  });
  return (
    <React.Fragment>
      <BoardWrapper>
        {boardData.map((data, index) => (
          <Square key={index} id={data.id} hasShip={data.hasShip} />
        ))}
      </BoardWrapper>
    </React.Fragment>
  );
};

export default Board;
