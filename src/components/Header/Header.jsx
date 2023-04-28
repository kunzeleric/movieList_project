import { Link } from 'react-router-dom';
import Logo from '../../assets/movie-logo.png';
import './index.scss';

const Header = (props) => {

  const handleSubmit = (event) => {
    event.preventDefault();
    const searchValue = event.target[0].value;
    props.onSubmit(searchValue);
    event.target[0].value = "";
  }

  return (
    <header className="header">
        <Link to='/'><img className="header__logo" src={Logo} alt="Logo" /></Link>
        <h1 className="header__title">Deplayer movie selection</h1>
        <ul className="header__menu">
          <Link to='/genres'><li>Categories</li></Link>
          <Link to='/mostwatched/'><li>Most Watched</li></Link>
          <Link to='/'><li>Top Rated</li></Link>
        </ul>
        <form onSubmit={handleSubmit} className="header__search">
          <input type="text" placeholder='Search your movie here' />
        </form>
    </header>
  )
}

export default Header;