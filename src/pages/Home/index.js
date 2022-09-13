import { Grid } from "@mui/material";
import React from "react";
import Players from "../Players/Players";
import Results from "../Results";
const logo = "/img/darts-board2.jpg";
const Home = () => {
  return (
    <main className="bg-dark">
      <div>
        <img
          className="mx-auto d-block"
          style={{
            borderRadius: "50%",
            color: "white",
            height: "150px",
            width: "150px",
            paddingTop: "5px",
            zIndex: -1
          }}
          src={logo}
          alt=""
        />
      </div>

      <h1 style={{ textAlign: "center", color: "blue" }}>
        Spring Rain Dart
        <span
          className="ms-2"
          style={{
            color: "orange",
            fontFamily: " LucidaSans"
          }}
        >
          Championship
        </span>
      </h1>

      <Grid container spacing={2} className="mt-1">
        <Grid
          item
          xs={10}
          sm={3}
          className=" shadow p-3 mb-5 bg-body rounded ms-5 "
        >
          <Results></Results>
        </Grid>
        <Grid
          item
          xs={10}
          sm={5}
          className="shadow-sm p-3 mb-5 bg-body rounded ms-5 "
        >
          <Players></Players>
        </Grid>
        <Grid
          item
          xs={10}
          sm={2}
          className="shadow-sm p-3 mb-5 bg-body rounded ms-5 "
        >
          <h3>current player</h3>
        </Grid>
      </Grid>
    </main>
  );
};

export default Home;
