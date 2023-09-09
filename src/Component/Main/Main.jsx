import React from "react";
import Header from "../Header/Header";
import Home from "../Home/Home";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className="flex">
      <Header />
      <div className="pt-[50px] ml-14">
        <Outlet className=""></Outlet>
      </div>
    </div>
  );
};

export default Main;
