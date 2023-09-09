import React from "react";
import img from "../../../public/waseque.jpeg";

const About = () => {
  return (
    <div className=" ml-64 grid grid-cols-2  ">
      <div className="">
        <img className="h-[100%] w-96" src={img} alt="" />
      </div>
      <div className="mr-14 -ml-16">
        <h1 className="mb-6 text-2xl">About</h1>
        <p>
          <span className="text-2xl font-bold">Waseque Arafat</span> is the SVP
          & Head of Boss. He was part of the founding team and has launched
          several highly successful products across Website Design , Make new
          Programme ride sharing, food delivery, payments,
          buy-now-pay-later,Online-payment and other categories which have
          shaped how people use digital services in Bangladesh, Usa, Uk,
          Canada,India,Bhutan, Nepal. <br />
          <br /> Boss has 8 million users, 300,000 Website and 433,344 Programme
          delivery agents, 30,000 merchants, and 10,000 restaurants on its
          network. They are operating in 5 cities across Bangladesh and Nepal.
          <br />
          <br />
          Waseque’s business podcast/channel has garnered 2 million+ views
          across YouTube, Facebook, and other platforms.
        </p>
      </div>
    </div>
  );
};

export default About;
