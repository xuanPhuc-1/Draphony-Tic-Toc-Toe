import React from "react";
import "./App.css";
import Game from "./game";
import backgoudImage from "../src/assets/img/resul-bg.webp";

function App() {
  return (
    <div className="App">
      <div
        className="container"
        style={{ backgroundImage: `url(${backgoudImage})` }}
      >
        <Game />
      </div>
    </div>
  );
}

export default App;
