import "./index.scss";

const MovieCard = ({ movieProp }) => {
  return (
    <div className="moviecard">
      <div className="moviecard-flip">
        <div className="moviecard__img">
          <img
            src={`https://image.tmdb.org/t/p/w1280${movieProp.poster_path}`}
            alt={movieProp.title}
          />
        </div>
        <div className="moviecard__description">
          <p className="moviecard__description-title">{movieProp.title}</p>
          <button className="moviecard__description-button">Ver Mais</button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
