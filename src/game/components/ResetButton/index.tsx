import React from "react";
import "./index.scss";
interface ResetButtonProps {
  onReset: () => void;
}

const ResetButton: React.FC<ResetButtonProps> = ({ onReset }) => {
  return (
    <button className="reset-button" onClick={onReset}>
      <p>Reset Game</p>
    </button>
  );
};

export default ResetButton;
