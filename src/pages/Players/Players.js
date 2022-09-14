import { Grid } from "@mui/material";
import Player from "../Player/index";
import React, { useState } from "react";
const ok = "/img/dart.png";
const Players = ({ players }) => {
  return (
    <div>
      <h3
        style={{
          textAlign: "center",

          color: "#0000CD",
          fontFamily: "cursive"
        }}
      >
        Top 3 Players
        <span>
          <img style={{ height: "100px", width: "150px" }} src={ok} alt="" />
        </span>
      </h3>

      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {players.map(player => (
          <Player player={player} key={player.id}></Player>
        ))}
      </Grid>
    </div>
  );
};

export default Players;
