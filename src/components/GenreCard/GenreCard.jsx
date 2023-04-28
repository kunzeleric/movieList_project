import './index.scss';
import { GENRES_MOCK } from '../../mock/genres-mock';

const GenreCard = ({data}) => {

  const genre = GENRES_MOCK.find(function(element){
    return element.name === data.name;
  })

  return (
    <div className="card__genre">
        <img className="card__genre-img" src={genre.imgPath} alt={genre.name}/>
        <h3 className="card__genre-title">{genre.name}</h3>
    </div>
  )
}

export default GenreCard