import { useEffect, useState } from "react";
import "./index.scss";
import { MovieService } from "../../api/MovieService";
import MovieCard from "../../components/MovieCard/MovieCard";

const MostWatched = ({ searchMovie }) => {
  const [listMovies, setListMovies] = useState([]);

  async function discoverMovies() {
    const {
      data: { results },
    } = await MovieService.getCategories();
    console.log(results);
    setListMovies(results);
  }

  async function getSearchMovies(movieString) {
    const {
      data: { results },
    } = await MovieService.searchMovies(movieString);
    setListMovies(results);
  }

  //chama a função discoverMovies ao montar o componente
  useEffect(() => {
    discoverMovies();
  }, []);

  useEffect(() => {
    //chama função getSearchMovies ao receber input de busca, caso contrário chama a getMovies (chamada ao ter o state atualizado)
    if (searchMovie) {
      getSearchMovies(searchMovie);
    }

    if (!searchMovie.trim()) {
      discoverMovies();
    }
  }, [searchMovie]);

  return (
    <>
        <section className="mostWatched">
            {listMovies.map((movie) => (
                <div key={movie.id} className="mostWatched__card">
                    <MovieCard movieProp={movie}/>
                </div>
            ))}
        </section>
    </>
  );
};

export default MostWatched;
