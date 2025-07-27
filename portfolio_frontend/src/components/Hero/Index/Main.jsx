import React from "react";
import { FaArrowRight, FaProjectDiagram } from "react-icons/fa";
import { Link } from "react-router";
import { ReactTyped } from "react-typed";
import HeroImage from "../../../assets/Hero/Hero.png";
const Main = () => {
  return (
    <div className="bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-center max-w-screen-xl mx-auto px-4 py-3 h-auto">
        <div className="">
          <h1 className="font-light uppercase ">
            Let's Bring Your Ideas To Life
          </h1>
          <h3
            className="text-xl md:text-2xl py-5  font-bold"
            data-aos="fade-out"
          >
            Hi, I am <span className="text-emerald-900">Stephen Vincent </span>
          </h3>
          <h2 className="pb-5  font-bold" data-aos="fade-out">
            <span className="text-xl py-5">A </span>
            <ReactTyped
              className="md:text-2xl sm:text-2xl text-xl text-emerald-700 "
              strings={[
                "Fullstack Engineer",
                "Software Developer",
                "Web Developer",
              ]}
              typeSpeed={100}
              typespeed={20}
              backDelay={2000}
              backSpeed={10}
              loop
            />
          </h2>
          <h2 className=" text-2xl md:text-3xl font-serif" data-aos="flip-up">
            Elevate your business perfomance through interactive websites and
            systems!
          </h2>
          <div className="flex pt-5 gap-4" data-aos="zoom-in">
            <Link to={"/resume"}>
              <button className="bg-emerald-700 text-gray-100 font-semibold p-2 md:p-4  rounded-full flex gap-2 items-center cursor-pointer hover:bg-emerald-800 transition-tranform ease-in-out duration-300 ">
                Resume <FaArrowRight />
              </button>
            </Link>
            <Link to={"/portfolio"}>
              <button className="bg-yellow-500 text-gray-900 font-semibold p-2 md:p-4 rounded-full flex gap-2 items-center cursor-pointer hover:bg-yellow-600 transition-tranform ease-in-out duration-300 ">
                My Projects <FaProjectDiagram />
              </button>
            </Link>
          </div>
        </div>
        <div>
          <img src={HeroImage} alt="" data-aos="flip-down" />
        </div>
      </div>
    </div>
  );
};

export default Main;
