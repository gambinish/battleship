import React from "react";
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
  return (
    <BoardWrapper>
      {boardData.map((data, index) => (
        <Square key={index} id={data.id} hasShip={data.hasShip} />
      ))}
    </BoardWrapper>
  );
};

export default Board;
