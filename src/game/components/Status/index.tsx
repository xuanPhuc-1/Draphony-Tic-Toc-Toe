import React from "react";
import "./index.scss";
interface StatusProps {
  status: string;
}

const Status: React.FC<StatusProps> = ({ status }) => {
  return <div className="status">{status}</div>;
};

export default Status;
