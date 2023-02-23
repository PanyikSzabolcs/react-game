import React from "react";
import { useState } from "react";
import Scene from "./Scene";
import Player from "./Player";

const Game = () => {

const [playerLocation, setPlayerLocation] = useState({ x: 100, y: 500})

  return (
    <div id="game">
        <Player location={playerLocation}/>
      <Scene background="steelblue"></Scene>
      <Scene background="lightgreen"></Scene>
      <Scene background="teal"></Scene>
    </div>
  );
};

export default Game;
