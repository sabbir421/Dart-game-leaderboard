import { Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import AllPlayers from "../AllPlayers/AllPlayers";
import CurrentPlayers from "../CurrentPlayers/CurrentPlayers";
import Players from "../Players/Players";
import Results from "../Results";
const logo = "/img/sp-Logo.png";
const bg = "/img/bg.webp";
const Home = () => {
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
    <>
      <main className="" style={{ backgroundImage: `url(${bg})` }}>
        <div className="py-4">
          <img
            className="mx-auto d-block"
            style={{
              height: "50px",
              width: "220px",
              paddingTop: "5px",
              zIndex: -1
            }}
            src={logo}
            alt=""
          />
          <h1 className="text-primary pt-4" style={{ textAlign: "center" }}>
            Dart Championship
          </h1>
        </div>

        <Grid container spacing={2} className="mt-1">
          <Grid
            item
            xs={10}
            sm={3}
            className=" shadow p-3 mb-5 bg-body rounded ms-5 "
          >
            <Results results={allPlayers.slice(0, 10)} />
          </Grid>
          <Grid
            item
            xs={10}
            sm={5}
            className="shadow-sm p-3 mb-5 bg-body rounded ms-5 "
          >
            <Players players={allPlayers.slice(0, 3)} />
          </Grid>
          <Grid
            item
            xs={10}
            sm={2}
            className="shadow-sm pl-4 mb-5 bg-body rounded ms-5 "
          >
            <CurrentPlayers currentPlayers={allPlayers} />
          </Grid>
        </Grid>
      </main>
    </>
  );
};

export default Home;
