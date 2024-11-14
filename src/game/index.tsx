import React, { useState, useEffect } from "react";
import Board from "./components/Board";
import Status from "./components/Status";
import ResetButton from "./components/ResetButton";
import { findBestMove, getMediumAIMove, getRandomMove } from "../utils/minimax";
import "./index.scss";
import LevelDropDown from "./components/LevelDropDown";
const Game: React.FC = () => {
  type Player = "X" | "O" | null;
  const [board, setBoard] = useState<Player[]>(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [status, setStatus] = useState("Next player: X");
  const [level, setLevel] = useState("easy");

  const calculateWinner = (squares: (string | null)[]) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
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

  const handleClick = (index: number) => {
    const squares = [...board];
    if (squares[index] || calculateWinner(squares)) return;

    squares[index] = "X";
    setBoard(squares);
    setIsXNext(false);
  };

  // useEffect để gọi AI khi đến lượt của nó
  useEffect(() => {
    // Hàm thực hiện nước đi của AI
    const handleAIMove = () => {
      let bestMove: number;

      if (level === "easy") {
        bestMove = getRandomMove(board);
      } else if (level === "medium") {
        bestMove = getMediumAIMove(board);
      } else {
        bestMove = findBestMove(board);
      }

      if (bestMove === -1) return;

      const squares = [...board];
      squares[bestMove] = "O";
      setBoard(squares);
      setIsXNext(true);
    };

    const winner = calculateWinner(board);
    if (winner) {
      setStatus(`Winner: ${winner}`);
    } else if (board.every((square) => square !== null)) {
      setStatus("Draw!");
    } else {
      setStatus(`Next player: ${isXNext ? "X" : "O"}`);
      if (!isXNext) {
        handleAIMove();
      }
    }
  }, [board, isXNext, level]);

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setStatus("Next player: X");
  };

  const handleLevelChange = (newLevel: string) => {
    setLevel(newLevel);
    resetGame();
  };

  return (
    <div className="game">
      <div className="game-title">
        <h1>Tic Tac Toe</h1>
      </div>
      <LevelDropDown onLevelChange={handleLevelChange} />
      <Status status={status} />
      <Board board={board} onClick={handleClick} />
      <ResetButton onReset={resetGame} />
    </div>
  );
};

export default Game;
