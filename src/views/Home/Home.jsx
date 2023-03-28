import { useEffect, useState } from "react";
import { MovieService } from "../../api/MovieService.js";
import MovieCard from "../../components/MovieCard/MovieCard";
import "./index.scss";

const Home = ({ searchMovie }) => {
  const [movies, setMovies] = useState([]);

  async function getMovies() {
    const { data: { results } } = await MovieService.getMovies();
    setMovies(results);
  }

  useEffect(() => {
      getMovies();
  }, []);

  return (
    <>
      <section className="home">
        {movies.map((movie) => (
          <div key={movie.id} className="home__card">
            <MovieCard movieProp={movie}/>
          </div>
        ))}
      </section>
    </>
  );
};

export default Home;
