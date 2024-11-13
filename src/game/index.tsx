import React, { useState } from "react";
import Board from "./components/Board";
import Status from "./components/Status";
import ResetButton from "./components/ResetButton";
import "./index.scss";

const Game: React.FC = () => {
  const [board, setBoard] = useState<(string | null)[]>(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [status, setStatus] = useState("Next player: X");

  // Hàm kiểm tra người thắng
  const calculateWinner = (squares: (string | null)[]) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8], // hàng ngang
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8], // hàng dọc
      [0, 4, 8],
      [2, 4, 6], // đường chéo
    ];
    for (let line of lines) {
      const [a, b, c] = line;
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  // Hàm xử lý khi người chơi nhấn vào ô
  const handleClick = (index: number) => {
    const squares = [...board];
    if (squares[index] || calculateWinner(squares)) return; // Bỏ qua nếu đã thắng hoặc ô đã được chọn

    squares[index] = isXNext ? "X" : "O";
    setBoard(squares);
    setIsXNext(!isXNext);

    const winner = calculateWinner(squares);
    if (winner) {
      setStatus(`Winner: ${winner}`);
    } else if (squares.every((square) => square !== null)) {
      setStatus("Draw!");
    } else {
      setStatus(`Next player: ${isXNext ? "O" : "X"}`);
    }
  };

  // Hàm reset lại trò chơi
  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setStatus("Next player: X");
  };

  return (
    <div className="game">
      <Status status={status} />
      <Board board={board} onClick={handleClick} />
      <ResetButton onReset={resetGame} />
    </div>
  );
};

export default Game;
