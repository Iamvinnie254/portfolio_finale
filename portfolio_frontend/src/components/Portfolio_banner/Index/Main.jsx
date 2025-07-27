import React from "react";
import { Link } from "react-router";

const Main = () => {
  return (
    <div className="">
      <div
        className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2  px-3 py-10"
        data-aos="zoom-in"
      >
        <div className="">
          <h2 className="text-xl font-light py-5">Portfolio</h2>
          <h1 className="text-2xl md:text-4xl font-semibold">
            Explore My Projects...
          </h1>
        </div>
        <div className="">
          <p className="py-5 text-lg ">
            {" "}
            Welcome to my portfolio! Explore a collection of projects where
            creativity meets functionality. Showcasing my expertise in web
            design and development.Take a look and see how I bring ideas to life
            through innovative, prolem-solving solutions.
          </p>
          <Link to="/portfolio">
            <button className="py-3 px-8 cursor-pointer rounded-full bg-yellow-500 hover:bg-yellow-600 transition-transform ease-in-out duration-300 text-xl text-gray-900 font-serif">
              Let's Go...
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Main;
