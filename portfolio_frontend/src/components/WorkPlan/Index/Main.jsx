import React from "react";
import {
  FaArrowRight,
  FaArrowUpRightDots,
  FaHandPointLeft,
  FaHandPointRight,
} from "react-icons/fa6";
import { Link } from "react-router";
import PlanningPhoto from "../../../assets/Services/PlanningStage.png";
import DesignPhoto from "../../../assets/Services/DesignStage.png";
import AfterMath from "../../../assets/Services/AfterMath.png";

const Main = () => {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center" data-aos="fade-out">
          <h2 className="text-emerald-700 text-xl font-serif py-3">
            How I Work
          </h2>
          <h1 className="text-2xl md:text-4xl font-semibold font-sans max-w-lg mx-auto py-4">
            My Structured Process to Address Your Needs...{" "}
          </h1>
        </div>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 py-5">
            <div className="p-3" data-aos="slide-right">
              <h1 className="text-2xl md:text-3xl font-extralight font-stretch-extra-expanded ">
                01
              </h1>
              <h2 className="text-3xl md:text-4xl font-semibold py-4">
                Planning and Discovery
              </h2>
              <p className=" font-sans py-5">
                This stage involves understanding the client’s needs, goals,
                target audience, and project requirements. It includes initial
                meetings, gathering information, setting project scope, and
                creating a roadmap or timeline.
              </p>
              <Link to="/contact" className="">
                <button className="flex items-center gap-2 cursor-pointer p-3 m-3 bg-yellow-500 rounded-full text-gray-900 hover:bg-yellow-600 hover:text-gray-800 transition-transform duration-300 ease-in-out font-serif font-semibold">
                  Apply Now <FaArrowUpRightDots />
                </button>
              </Link>
            </div>
            <div>
              <img
                src={PlanningPhoto}
                alt="Planning stage"
                data-aos="slide-left"
              />
            </div>
          </div>

          {/* Design Stage */}
          <div className="grid grid-cols-1 md:grid-cols-2 py-5">
            <div>
              <img src={DesignPhoto} alt="Design stage" data-aos="zoom-out" />
            </div>
            <div className="p-3" data-aos="zoom-in">
              <h1 className="text-2xl md:text-3xl font-extralight font-stretch-extra-expanded ">
                02
              </h1>
              <h2 className="text-3xl md:text-4xl font-semibold py-4">
                Design and Development
              </h2>
              <p className=" font-sans py-5">
                In this phase, the visual design and technical structure of the
                website are created. Wireframes, mockups, and prototypes are
                developed, followed by the coding and integration of
                functionalities to bring the design to life.Which is also
                applicable to those interested in posters/logos/billboard
                adverts etc.
              </p>
              <Link to="/portfolio" className="">
                <button className="flex items-center gap-2 cursor-pointer p-3 m-3 bg-emerald-700 rounded-full text-gray-100 hover:bg-emerald-800 hover:text-gray-400 transition-transform duration-300 ease-in-out font-serif font-semibold">
                  Discover More <FaHandPointLeft />
                </button>
              </Link>
            </div>
          </div>
          {/* Testing, Launch & Maintenance Stage */}
          <div className="grid grid-cols-1 md:grid-cols-2 py-5">
            <div className="p-3" data-aos="zoom-in">
              <h1 className="text-2xl md:text-3xl font-extralight font-stretch-extra-expanded ">
                03
              </h1>
              <h2 className="text-3xl md:text-4xl font-semibold py-4">
                Testing, Launch & Maintenance
              </h2>
              <p className=" font-sans py-5">
                After development, the website undergoes testing to ensure
                functionality, compatibility, and usability across devices. Once
                approved, the site is launched. Ongoing maintenance and updates
                are often provided to keep the website performing optimally.
              </p>
              <Link to="/portfolio" className="">
                <button className="flex items-center gap-2 cursor-pointer p-3 m-3 bg-blue-900 rounded-full text-gray-100 hover:bg-blue-800 hover:text-gray-200 transition-transform duration-300 ease-in-out font-serif font-semibold">
                  Explore More <FaArrowRight />
                </button>
              </Link>
            </div>
            <div>
              <img
                src={AfterMath}
                alt="Testing, Launch & Maintenance"
                data-aos="zoom-out"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
