import React from "react";
const avatar = "/img/dart4.jfif";
const CurrentPlayer = ({ currentPlayer }) => {
  const result = currentPlayer.find(({ isPlaying }) => isPlaying === true);
  console.log(result);
  console.log(currentPlayer);
  const img = result ? result.image : avatar;
  return (
    <div>
      <img
        className="d-block mx-auto rounded-circle"
        style={{ height: "150px", width: "150px" }}
        src={img}
      />
      <h6 className="text-warning my-4" style={{ textAlign: "center" }}>
        {result?.name}{" "}
        <span style={{ color: "green", fontSize: "65px" }}>.</span>
      </h6>
      <h1 className="text-primary" style={{ textAlign: "center" }}>
        Score : {result?.total_point}
      </h1>
    </div>
  );
};

export default CurrentPlayer;
