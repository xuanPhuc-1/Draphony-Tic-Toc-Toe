import React from "react";
import "./index.scss";

interface LevelDropDownProps {
  onLevelChange: (level: string) => void;
}

const LevelDropDown: React.FC<LevelDropDownProps> = ({ onLevelChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onLevelChange(event.target.value);
  };

  return (
    <div className="level-dropdown">
      <label htmlFor="level">Choose difficulty level: </label>
      <select id="level" onChange={handleChange}>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>
    </div>
  );
};

export default LevelDropDown;
