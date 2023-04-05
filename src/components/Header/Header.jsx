import { Link } from 'react-router-dom';
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
        <Link to='/'><img className="header__logo" src={'movie-logo.png'} alt="Logo" /></Link>
        <h1 className="header__title">Deplayer movie selection</h1>
        <ul className="header__menu">
          <li>Categories</li> 
          <li>Most Watched</li>
          <Link to='/'><li>Top Rated</li></Link>
        </ul>
        <form onSubmit={handleSubmit} className="header__search">
          <input type="text" placeholder='Search your movie here' />
        </form>
    </header>
  )
}

export default Header;