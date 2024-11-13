import React from "react";
import Square from "./components/Square";
import "./index.scss";
interface BoardProps {
  board: (string | null)[];
  onClick: (index: number) => void;
}

const Board: React.FC<BoardProps> = ({ board, onClick }) => {
  return (
    <div className="board">
      {board.map((value, index) => (
        <Square key={index} value={value} onClick={() => onClick(index)} />
      ))}
    </div>
  );
};

export default Board;
