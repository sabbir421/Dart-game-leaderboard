import { Grid } from "@mui/material";
import React from "react";
const avatar = "/img/avatar.png";
const AllPlayer = ({ allPlayer }) => {
  return (
    <Grid item xs={2} sm={4} md={4}>
      <div class="p-3 border shadow bg-warning rounded">
        <img
          className="mx-auto d-block rounded-circle"
          src={allPlayer.image ? allPlayer.image : avatar}
          alt=""
          style={{ height: "100px", width: "100px" }}
        />
        <h3
          className="text-white mt-2"
          style={{ fontFamily: "cursive", textAlign: "center" }}
        >
          {allPlayer.name}
        </h3>
      </div>
    </Grid>
  );
};

export default AllPlayer;
