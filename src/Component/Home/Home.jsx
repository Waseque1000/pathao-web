import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import Img from "../img-Header/Img";

const Home = () => {
  return (
    <div className=" flex">
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
