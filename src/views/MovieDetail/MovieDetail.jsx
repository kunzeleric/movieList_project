import { useParams } from "react-router-dom";
import { MovieService } from "../../api/MovieService";
import { useEffect, useState } from "react";
import MovieCard from "../../components/MovieCard/MovieCard";
import "./index.scss";
import ReturnButton from "../../components/ReturnButton/ReturnButton";

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [recommendedMovies, setRecommendedMovie] = useState([]);

  async function getMovie() {
    const { data } = await MovieService.getMovieDetails(id);
    setMovie(data);
  }

  async function getRecommendedMovies() {
    let arrayFilmes = [];

    const {
      data: { results },
    } = await MovieService.getRecommendations(id);

    if (results.length == 0) {
      document.getElementById("recommend").style.display = "none";
    } else {
      for (let i = 0; i < results.length; i++) {
        if (results[i].backdrop_path === null) {
          continue;
        }

        arrayFilmes.push(results[i]);
      }

      setRecommendedMovie(arrayFilmes);
    }
  }

  useEffect(() => {
    getMovie();
  }, [id]);

  useEffect(() => {
    getRecommendedMovies();
  }, [id]);
  return (
    <main className="MovieDetail__main">
      <section className="MovieDetail">
        <div className="MovieDetail-container">
          <h1 className="MovieDetail__title">{movie.title}</h1>
          <div className="MovieDetail__img">
            {}
            <img
              src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
              alt={movie.title}
            />
          </div>
        </div>

        <div className="MovieDetail__details">
          <div className="MovieDetail__details-card">
            <h3>Budget Spent</h3>
            <p>{movie.budget}</p>
          </div>
          <div className="MovieDetail__details-card">
            <h3>Overview</h3>
            <p>{movie.overview}</p>
          </div>
          <div className="MovieDetail__details-card">
            <h3>Popularity Rating</h3>
            <p>{movie.popularity}</p>
          </div>
          <div className="MovieDetail__details-card">
            <h3>Score</h3>
            <p>{movie.vote_average}</p>
          </div>
          <div className="MovieDetail__details-card">
            <h3>Release Date</h3>
            <p>{movie.release_date}</p>
          </div>
            <ReturnButton/>
        </div>
      </section>

      <section className="recommend" id="recommend">
        <h2 className="text">{`Since you're interested in ${movie.title}, check these below...`}</h2>
        <div className="recommend__section">
          {recommendedMovies.map((movie) => (
            <div key={movie.id} className="recommend_card">
              <MovieCard movieProp={movie} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default MovieDetail;
