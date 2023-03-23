import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./views/Home/Home";
import MovieDetail from "./views/MovieDetail/MovieDetail";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/moviedetail/:id" element={<MovieDetail/>}/>
      </Routes>
    </div>
  );
}

export default App;
