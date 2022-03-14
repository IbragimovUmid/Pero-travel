import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Excursion from "./Pages/Excursions";
import "./bootstrap-grid.css";
import "./main.scss";
import Page3 from "./Pages/Page3";
import Personal from "./Pages/Personal";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/excursions" element={<Excursion />} />
        <Route path="/page3" element={<Page3 />} />
        <Route path="ownRoom" element={<Personal/>} />
      </Routes>
    </div>
  );
}

export default App;
