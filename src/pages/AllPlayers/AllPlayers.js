import { Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import AllPlayer from "../AllPlayer/AllPlayer";

const AllPlayers = () => {
  const [allPlayers, setAllPlayers] = useState([]);
  useEffect(() => {
    const interval = setInterval(
      fetch("http://localhost:8081/leader-board")
        .then(res => res.json())
        .then(data => {
          setAllPlayers(data);
        }),
      10000
    );
    return () => {
      clearInterval(interval);
    };
  }, [setAllPlayers]);
  return (
    <div className="bg-dark">
      <h3
        className="my-4 mt-4 pt-4"
        style={{
          textAlign: "center",
          color: "white",
          fontFamily: "cursive"
        }}
      >
        All Players
      </h3>

      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {allPlayers?.map(allPlayer => (
          <AllPlayer allPlayer={allPlayer} key={allPlayer.id}></AllPlayer>
        ))}
      </Grid>
    </div>
  );
};

export default AllPlayers;
