import React from "react";
import img from "../../../public/waseque.jpeg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className=" ml-64   mr-10 flex">
      <img className="h-[70%] w-96" src={img} alt="" />
      <div className="ml-14">
        <h2>
          Full Bio{" "}
          <span className=" bg-red-500">
            <Link className="font-bold" to="/about">
              here
            </Link>
          </span>
        </h2>
        <h1 className="mt-4 mb-5 font-bold ">
          Things I'm involved with and areas of interest:
        </h1>
        <div>
          <ol className="ml-8">
            <li>
              Mobility and logistics: Pathao’s core businesses include courier,
              ride-sharing and food delivery. My team and I get to build all of
              the software powering these verticals
            </li>
            <br />
            <li>
              Fintech: Led and launched a (successful) BNPL product. Working on
              Wind–helping remote workers get paid and protect the value of
              their savings.
            </li>
            <br />
            <li>
              Economic opportunity: Pathao creates income opportunities for
              300,000 drivers and delivery agents, 30,000 merchants, and 10,000
              restaurants across 5 cities in Bangladesh and Nepal.
            </li>
            <br />
            <li>
              Conversation: I enjoy learning from others & sharing my own
              lessons (90:10 split) on my YouTube channel which garnered 700K
              views in 2022.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Home;
