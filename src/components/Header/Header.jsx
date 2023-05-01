import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.svg';
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
        <form onSubmit={handleSubmit} className="header__search">
          <input type="text" placeholder='Search your movie here' />
        </form>
    </header>
  )
}

export default Header;