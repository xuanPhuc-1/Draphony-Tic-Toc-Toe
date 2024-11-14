import React from "react";
import "./index.scss";

interface SquareProps {
  value: string | null;
  onClick: () => void;
  number: number; // Thêm prop number để sử dụng làm bóng mờ
}

const Square: React.FC<SquareProps> = ({ value, onClick, number }) => {
  return (
    <div
      className={`square ${value ? "filled" : ""} ${value}`} // Thêm lớp 'filled' khi có giá trị
      onClick={onClick}
      data-number={number}
    >
      {value}
    </div>
  );
};

export default Square;
