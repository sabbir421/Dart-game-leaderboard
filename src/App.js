import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllPlayers from "./pages/AllPlayers/AllPlayers";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/allPlayers" element={<AllPlayers />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
