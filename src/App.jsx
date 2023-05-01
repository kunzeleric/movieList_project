import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./views/Home/Home";
import MovieDetail from "./views/MovieDetail/MovieDetail";
import { useState } from "react";
import MostWatched from "./views/MostWatched/MostWatched";
import Categories from "./views/Categories/Categories";
import MoviesCategories from "./views/MoviesCategories/MoviesCategories";
import TopRated from "./views/TopRated/TopRated";
import './index.scss';
import RootLayout from "./layouts/RootLayout";

function App() {
  const [search, setSearch] = useState("");

  return (
    <div className="App">
      <Header onSubmit={(inputValue) => setSearch(inputValue) }/>
        <Routes>
          <Route path='/' element={<RootLayout/>}>
            <Route index element={<Home searchMovie={search}/>}/>
            <Route path=":id" element={<MovieDetail/>}/>
            <Route path='mostwatched' element={<MostWatched searchMovie={search}/>} />
            <Route path='toprated' element={<TopRated searchMovie={search}/>} />
            <Route path='categories' element={<Categories searchMovie={search}/>}/>
            <Route path='categories/:genre' element={<MoviesCategories searchMovie={search}/>}/>
          </Route>
        </Routes>
    </div>
  );
}

export default App;