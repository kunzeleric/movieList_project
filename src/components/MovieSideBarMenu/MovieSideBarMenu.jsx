import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faShip,
  faBoxes,
  faFire,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./index.scss";

const MovieSideBarMenu = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  

  function HideMenu() {
    const sideBar = document.querySelector(".sidebar");
    const pElements = Array.from(document.querySelectorAll('p'));

    if (!menuVisible) {
      sideBar.classList.toggle('resize');
      
      pElements.map((item) => {
        item.classList.toggle('hidden');
      })

      setMenuVisible(true);
    } else {
      sideBar.classList.toggle('resize');
      pElements.map((item) => {
        item.classList.toggle('hidden');
  
      })
      setMenuVisible(false);
    }
  }

  return (
    <div className="sidebar">
      <nav className="sidebar__nav">
        <FontAwesomeIcon icon={faBars} className="iconMenu" onClick={HideMenu}/>
        <ul className="sidebar__nav-list">
        <Link to={"/"} className="link">
            <li className="sidebar__nav-list__item active">
              <div className="sidebar__nav-list__item-wrapper">
                <FontAwesomeIcon icon={faShip} className="icon"/>
                <p>Navigate</p>
              </div>
            </li>
          </Link>

            <Link to="toprated" className="link">
              <li className="sidebar__nav-list__item">
                <div className="sidebar__nav-list__item-wrapper">
                  <FontAwesomeIcon icon={faStar} className="icon" />
                  <p>Top Rated</p>
                </div>
              </li>
            </Link>

            <Link to="categories" className="link">
              <li className="sidebar__nav-list__item">
                <div className="sidebar__nav-list__item-wrapper">
                  <FontAwesomeIcon icon={faBoxes} className="icon" />
                  <p>Categories</p>
                </div>
              </li>
            </Link>

            <Link to="mostwatched" className="link">
              <li className="sidebar__nav-list__item">
                <div className="sidebar__nav-list__item-wrapper">
                  <FontAwesomeIcon icon={faFire} className="icon" />
                  <p>Most Watched</p>
                </div>
              </li>
            </Link>

        </ul>
      </nav>
    </div>
  );
};

export default MovieSideBarMenu;
