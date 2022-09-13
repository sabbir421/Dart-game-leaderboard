import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
const king = "/img/king.png";

const Results = () => {
  const [results, setResults] = useState([]);
  setInterval(
    fetch("http://localhost:8081/leader-board")
      .then(response => response.json())
      .then(data => {
        setResults(data.slice(0, 10));
      }),

    1000
  );

  return (
    <div>
      <h3
        style={{
          textAlign: "center",
          color: "#0000CD",
          fontFamily: "cursive"
        }}
      >
        Leader Board
        <span>
          <img style={{ height: "50px", width: "50px" }} src={king} alt="" />
        </span>
      </h3>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 350 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Rank</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Total Point</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {results.map((result, i) => (
              <TableRow
                key={result.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                style={{ backgroundColor: "#D2691E" }}
              >
                <TableCell align="center" className="text-white">
                  {i + 1}
                </TableCell>
                <TableCell align="center" className="text-white">
                  {result.name}
                </TableCell>
                <TableCell align="center" className="text-white">
                  {result.total_point}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Results;
