import React from "react";
import { FaLocationArrow } from "react-icons/fa";
import { Link } from "react-router";
import About_Me_Photo from "../../../assets/About/About_me.jpeg";

const Main = () => {
  return (
    <div className="bg-gradient-to-r from-gray-300 to-blue-200">
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-screen-xl mx-auto ">
        <div className="py-10" data-aos="zoom-in">
          <h2 className="px-5 text-xl font-light">About Me!</h2>
          <h1 className="px-5 py-3 text-2xl md:text-4xl font-bold">
            My Story...
          </h1>
          <p className="px-5 py-2 text-lg">
            I’m a passionate web designer and developer with a deep love for
            crafting innovative digital solutions. My expertise lies in creating
            intuitive, user-friendly websites that not only meet client needs
            but also address real-world challenges. I believe in the power of
            technology to drive positive change, and I’m committed to leveraging
            my skills to solve problems that impact society. Whether it’s
            building responsive websites, optimizing user experiences, or
            developing custom web applications, I am always looking for ways to
            make the digital world more effective and accessible.Enjoy the
            best….
          </p>
          <Link to="/portfolio" className="p-5">
            <button className="flex gap-2 items-center m-3 bg-blue-900 text-gray-300 p-3 rounded-full font-semibold hover:bg-blue-800 hover:font-blue-800 hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer  ">
              Explore More{" "}
              <span>
                <FaLocationArrow />
              </span>
            </button>
          </Link>
        </div>
        <div className="md:py-10 py-5 p-4" data-aos="zoom-out">
          <img src={About_Me_Photo} alt="" className="w-[550px] h-[500px]" />
        </div>
      </div>
    </div>
  );
};

export default Main;
