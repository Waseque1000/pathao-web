import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className=" fixed flex justify-around  ">
      <div className=" bg-blue-500 pt-8 text-white  ">
        <div className="py-4 mx-9  px-6">
          <Link to="/">
            <h1 className="text-2xl mr-20 mb-2 font-bold">Waseque Arafat</h1>
          </Link>
          <span className="font-light  ml-4 ">Front End developer</span>
        </div>
        <ul className="ml-8 pl-7 space-y-2">
          <li>
            <Link to="/about" className="block px-4 py-2 hover:bg-blue-600">
              About
            </Link>
          </li>
          <li>
            <Link to="/artical" className="block px-4 py-2 hover:bg-blue-600">
              Artical
            </Link>
          </li>
          <li>
            <Link to="/talks" className="block px-4 py-2 hover:bg-blue-600">
              Talks
            </Link>
          </li>
          <li>
            <Link to="/news" className="block px-4 py-2 hover:bg-blue-600">
              Newsletter
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
