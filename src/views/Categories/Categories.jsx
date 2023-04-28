import "./index.scss";
import { MovieService } from "../../api/MovieService.js";
import { useEffect, useState } from "react";
import GenreCard from "../../components/GenreCard/GenreCard";

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
          <GenreCard data={genre} />
        ))
      }
    </section>
  );
};

export default Categories;
