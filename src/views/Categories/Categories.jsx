import "./index.scss";
import { MovieService } from "../../api/MovieService.js";
import { useEffect, useState } from "react";
import GenreCard from "../../components/GenreCard/GenreCard";
import { Link } from "react-router-dom";

const Categories = () => {
  const [genres, setGenres] = useState([]);

  async function getGenres() {
    const {
      data: { genres },
    } = await MovieService.getGenres();
    setGenres(genres);
  }

  useEffect(() => {
    getGenres();
  }, []);

  return (
    <section className="genres">
      {
        genres.map((genre) => (
          <Link to={`/genres/${genre.id}`} ><GenreCard data={genre} /></Link>
        ))
      }
    </section>
  );
};

export default Categories;
