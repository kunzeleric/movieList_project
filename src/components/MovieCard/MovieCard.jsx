import { Link } from "react-router-dom";
import "./index.scss";
import { useState } from "react";

const MovieCard = ({ movieProp }) => {
  console.log(movieProp)

  return (
    movieProp.poster_path ?
      <div className="moviecard">
        <div className="moviecard-flip">
          <div className="moviecard__img">
            <img
              src={`https://image.tmdb.org/t/p/w1280/${movieProp.poster_path}`}
              alt={movieProp.title}
            />
          </div>
          <div className="moviecard__description">
            <h4 className="moviecard__description-title">{movieProp.title}</h4>
            <p className="moviecard__description-summary">{movieProp.overview}</p>
            <Link to={`/${movieProp.id}`}><button className="moviecard__description-button">Ver Mais</button></Link>
          </div>
        </div>
      </div>
      : null
  );
};

export default MovieCard;
