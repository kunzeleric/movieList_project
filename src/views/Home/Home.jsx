import { useEffect, useState } from "react";
import { MovieService } from "../../api/MovieService.js";
import MovieCard from "../../components/MovieCard/MovieCard";
import "./index.scss";

const Home = ({ searchMovie }) => {
  const [movies, setMovies] = useState([]);

  async function getMovies() {
    const {
      data: { results },
    } = await MovieService.getMovies();
    setMovies(results);
  }

  async function getSearchMovies(movieString) {
    const {
      data: { results },
    } = await MovieService.searchMovies(movieString);
    setMovies(results);
  }

  //chama a função getMovies ao montar o componente
  useEffect(() => {
    getMovies();
  }, []);

  useEffect(() => {
    //chama função getSearchMovies ao receber input de busca, caso contrário chama a getMovies (chamada ao ter o state atualizado)
    if (searchMovie) {
      getSearchMovies(searchMovie);
    }

    if (!searchMovie.trim()) {
      getMovies();
    }
  }, [searchMovie]);

  return (
    <>
      <section className="home">
        <div className="home__section">
          {movies.map((movie) => (
              <MovieCard key={movie.id} movieProp={movie} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
