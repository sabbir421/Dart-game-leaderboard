import { Grid } from "@mui/material";
import React from "react";
const avatar = "/img/avatar.png";

const index = ({ player }) => {
  return (
    <Grid item xs={2} sm={4} md={4} key={index}>
      <div class="p-3 border shadow bg-primary rounded">
        <img
          className="mx-auto d-block rounded-circle"
          src={avatar}
          alt=""
          style={{ height: "100px", width: "100px" }}
        />
        <h3
          className="text-white mt-2"
          style={{ fontFamily: "cursive", textAlign: "center" }}
        >
          {player.name}
        </h3>
        <h3
          className="text-white mt-2"
          style={{ fontFamily: "cursive", textAlign: "center" }}
        >
          score : {player.total_point}
        </h3>
      </div>
    </Grid>
  );
};

export default index;
