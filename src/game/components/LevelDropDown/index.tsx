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
      <label htmlFor="level">Chọn mức độ khó: </label>
      <select id="level" onChange={handleChange}>
        <option value="easy">Dễ</option>
        <option value="medium">Trung bình</option>
        <option value="hard">Khó</option>
      </select>
    </div>
  );
};

export default LevelDropDown;
