import "./index.scss";
import { MovieService } from "../../api/MovieService.js";
import { useEffect, useState } from "react";
import GenreCard from "../../components/GenreCard/GenreCard";
import { Link, Outlet } from "react-router-dom";
import MovieCard from "../../components/MovieCard/MovieCard";

const Categories = ({ searchMovie }) => {
  const [genres, setGenres] = useState([]);
  const [listMovies, setListMovies] = useState([]);

  async function getGenres() {
    const {
      data: { genres },
    } = await MovieService.getGenres();
    setGenres(genres);
  }

  
  async function getSearchMovies(movieString) {
    const {
      data: { results },
    } = await MovieService.searchMovies(movieString);
    setListMovies(results);
  }

  useEffect(() => {
    getGenres();
  }, []);

  
  useEffect(() => {
    if (searchMovie) {
      getSearchMovies(searchMovie);
    }
    if (!searchMovie.trim()) {
      getGenres();
    }
  }, [searchMovie]);

  return (
    <section className="genres">
      {
        searchMovie.length == 0 ? genres.map((genre) => (
          <Link to={`${genre.id}`} ><GenreCard data={genre} /></Link>
        )) : listMovies.map((movie) => (
          <div key={movie.id}>
              <MovieCard movieProp={movie}/>
          </div>
      ))
      }
    <Outlet/>
    </section>
  );
};

export default Categories;
