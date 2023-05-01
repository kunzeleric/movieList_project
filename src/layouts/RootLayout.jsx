import React from "react";
import { Outlet } from "react-router-dom";
import MovieSideBarMenu from "../components/MovieSideBarMenu/MovieSideBarMenu";
import './RootLayout.scss';

const RootLayout = () => {
  return (
    <div className="root-layout">
      <MovieSideBarMenu/>
      <Outlet />
    </div>
  );
};

export default RootLayout;
