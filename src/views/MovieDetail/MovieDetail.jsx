import { Link, useParams } from "react-router-dom";
import { MovieService } from "../../api/MovieService";
import { useEffect, useState } from "react";
import "./index.scss";

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  async function getMovie() {
    const { data } = await MovieService.getMovieDetails(id);
    setMovie(data);
  }

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <section className="MovieDetail">
      <div className="MovieDetail-container">
        <h1 className="MovieDetail__title">{movie.title}</h1>
        <div className="MovieDetail__img">
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
        <Link to={"/"}>
          <button className="MovieDetail__details-btn">Voltar</button>
        </Link>
      </div>
    </section>
  );
};

export default MovieDetail;
