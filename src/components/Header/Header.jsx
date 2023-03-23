import './index.scss';

const Header = () => {
  return (
    <header className="header">
        <img className="header__logo" src={'movie-logo.png'} alt="Logo" />
        <h1 className="header__title">Deplayer movie selection</h1>
        <ul className="header__menu">
          <li>Categories</li> 
          <li>Most Watched</li>
          <li>Top Rated</li>
        </ul>
        <form className="header__search">
          <input type="text" placeholder='Search your movie here' />
        </form>
    </header>
  )
}

export default Header;