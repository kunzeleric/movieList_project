import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faShip,
  faBoxes,
  faFire,
} from "@fortawesome/free-solid-svg-icons";
import "./index.scss";
import { Link } from "react-router-dom";

const MovieSideBarMenu = () => {
  return (
    <div className='sidebar'>
      <nav className="sidebar__nav">
        <ul className="sidebar__nav-list">
          <li className='active'>
            <Link to={"/"} className='link'>
              <FontAwesomeIcon icon={faShip} className='icon' />
              Navigate
            </Link>
          </li>
          <li>
            <Link to='toprated' className='link'>
              <FontAwesomeIcon icon={faStar} className='icon' />
              Top Rated
            </Link>
          </li>

          <li>
            <Link to='categories' className='link'>
              <FontAwesomeIcon icon={faBoxes} className='icon' />
              Categories
            </Link>
          </li>
          <li>
            <Link to='mostwatched' className='link'>
              <FontAwesomeIcon icon={faFire} className='icon' />
              Most Watched
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MovieSideBarMenu;
