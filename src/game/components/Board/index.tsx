import React from "react";
import Square from "./components/Square";
import "./index.scss";

interface BoardProps {
  board: (string | null)[];
  onClick: (index: number) => void;
  winningLine: number[] | null; // Thêm winningLine
}

const Board: React.FC<BoardProps> = ({ board, onClick, winningLine }) => {
  return (
    <div className="board">
      {board.map((value, index) => (
        <Square
          key={index}
          value={value}
          onClick={() => onClick(index)}
          number={index + 1}
          highlight={winningLine?.includes(index) ?? false} // Kiểm tra nếu ô này thuộc đường thắng
        />
      ))}
      {winningLine && (
        <div className={`winning-line line-${winningLine.join("-")}`} />
      )}
    </div>
  );
};

export default Board;
