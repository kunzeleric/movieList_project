import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./views/Home/Home";
import MovieDetail from "./views/MovieDetail/MovieDetail";
import { useState } from "react";
import './index.scss';
import MostWatched from "./views/MostWatched/MostWatched";
import Categories from "./views/Categories/Categories";
import MoviesCategories from "./views/MoviesCategories/MoviesCategories";
import TopRated from "./views/TopRated/TopRated";

function App() {
  const [search, setSearch] = useState("");

  return (
    <>
    <div className="App">
      <Header onSubmit={(inputValue) => setSearch(inputValue) }/>
      <Routes>
        <Route path="/" element={<Home searchMovie={search}/>}/>
        <Route path="/movie/:id" element={<MovieDetail/>}/>
        <Route path='/mostwatched/' element={<MostWatched searchMovie={search}/>} />
        <Route path='/toprated/' element={<TopRated searchMovie={search}/>} />
        <Route path='/genres/' element={<Categories/>}/>
        <Route path='/genres/:genre' element={<MoviesCategories/>}/>
      </Routes>
    </div>
    </>
  );
}

export default App;
