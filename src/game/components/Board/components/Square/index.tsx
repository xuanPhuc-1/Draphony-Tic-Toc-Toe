import React from "react";
import "./index.scss";

interface SquareProps {
  value: string | null;
  onClick: () => void;
  number: number;
  highlight: boolean; // Thêm prop highlight để đánh dấu ô chiến thắng
}

const Square: React.FC<SquareProps> = ({
  value,
  onClick,
  number,
  highlight,
}) => {
  return (
    <div
      className={`square ${value ? "filled" : ""} ${value} ${
        highlight ? "highlight" : ""
      }`}
      onClick={onClick}
      data-number={number}
    >
      {value}
    </div>
  );
};

export default Square;
