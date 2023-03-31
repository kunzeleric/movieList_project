import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./views/Home/Home";
import MovieDetail from "./views/MovieDetail/MovieDetail";
import { useState } from "react";
import './index.scss';

function App() {
  const [search, setSearch] = useState("");

  return (
    <>
    <div className="App">
      <Header onSubmit={(inputValue) => setSearch(inputValue) }/>
      <Routes>
        <Route path="/" element={<Home searchMovie={search}/>}/>
        <Route path="/movie/:id" element={<MovieDetail/>}/>
      </Routes>
    </div>
    </>
  );
}

export default App;
