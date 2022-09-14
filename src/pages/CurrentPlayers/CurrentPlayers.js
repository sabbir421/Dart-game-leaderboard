import React, { useState, useEffect } from "react";
import CurrentPlayer from "../CurrentPlayer/index";

const CurrentPlayers = ({ currentPlayers }) => {
  return (
    <div>
      <h3
        style={{
          textAlign: "center",
          color: "#0000CD",
          fontFamily: "cursive"
        }}
      >
        Playing Now
      </h3>

      <CurrentPlayer currentPlayer={currentPlayers} key={currentPlayers.id} />
    </div>
  );
};

export default CurrentPlayers;
