import { useParams } from "react-router-dom";
import { MovieService } from "../../api/MovieService";
import { useEffect, useState } from "react";
import MovieCard from "../../components/MovieCard/MovieCard";
import "./index.scss";

const MoviesCategories = ({ searchMovie }) => {
  const { genre } = useParams();
  const [listMovies, setListMovies] = useState([]);
  const [listSearchMovies, setListSearchMovies] = useState([]);

  async function getMoviesByGenre(genre) {
    const {
      data: { results },
    } = await MovieService.getMoviesFromGenre(genre);
    setListMovies(results);
  }

  async function getSearchMovies(movieString) {
    const {
      data: { results },
    } = await MovieService.searchMovies(movieString);
    setListSearchMovies(results);
  }

  useEffect(() => {
    getMoviesByGenre(genre);
  }, [genre]);

  useEffect(() => {
    //chama função getSearchMovies ao receber input de busca, caso contrário chama a getMovies (chamada ao ter o state atualizado)
    if (searchMovie) {
      getSearchMovies(searchMovie);
    }

    if (!searchMovie.trim()) {
      getMoviesByGenre(genre);
    }
  }, [searchMovie]);

  return (
    <section className="movies__genres">
      {
      listSearchMovies.length == 0 ? listMovies.map((movie) => (
        <div className="movies__genres-card">
          <MovieCard movieProp={movie} />
        </div>
      )) : listSearchMovies.map((movie) => (
        <div key={movie.id}>
            <MovieCard movieProp={movie}/>
        </div>
    ))
      }
    </section>
  );
};

export default MoviesCategories;
