import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import img from "../../../public/waseque.jpeg";
import Img from "../img-Header/Img";

const Header = () => {
  return (
    <div className="grid grid-cols-3">
      <div className=" flex   justify-around">
        <div className=" bg-blue-500 mt-10 text-white h-screen">
          <div className="py-4 mx-9  px-6">
            <Link to="/">
              <h1 className="text-2xl mr-20 mb-2 font-bold">Waseque Arafat</h1>
            </Link>
            <span className="font-light  ">Front End developer</span>
          </div>
          <ul className="mt-6 ml-8 space-y-2">
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
      {/*  img  */}
      <Img></Img>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt a
          nulla fuga doloremque illo omnis quasi aspernatur voluptate delectus
          recusandae nesciunt temporibus corrupti quam sed voluptatibus qui,
          quas dolorem obcaecati consequuntur deserunt consectetur nobis
          consequatur? Quaerat voluptatum perspiciatis fugit impedit voluptates
          molestias, a corporis, quae voluptate suscipit, nihil neque in veniam.
          Amet nihil optio quae possimus quidem consectetur omnis quibusdam
          illo, deleniti harum quas quis id, praesentium repellendus est quam
          rerum, error similique veritatis natus. At neque quo voluptate hic
          accusamus earum ipsa quae fugit delectus, adipisci qui incidunt
          possimus.
        </p>
      </div>
    </div>
  );
};

export default Header;
