import { useParams } from "react-router-dom";
import { MovieService } from "../../api/MovieService";
import { useEffect, useState } from "react";
import MovieCard from "../../components/MovieCard/MovieCard";
import "./index.scss";

const MoviesCategories = () => {
  const { genre } = useParams();
  const [movies, setMovies] = useState([]);

  async function getMoviesByGenre(genre) {
    const {
      data: { results },
    } = await MovieService.getMoviesFromGenre(genre);
    setMovies(results);
  }

  useEffect(() => {
    getMoviesByGenre(genre);
  }, []);

  return (
    <section className="movies__genres">
      {movies.map((movie) => (
        <div className="movies__genres-card">
          <MovieCard movieProp={movie} />
        </div>
      ))}
    </section>
  );
};

export default MoviesCategories;
