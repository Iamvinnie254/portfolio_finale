import React from "react";
import { FaLaptop } from "react-icons/fa";

const Main = () => {
  return (
    <div>
      <div className="max-w-screen-lg mx-auto p-3">
        <div className="p-3 text-center" data-aos="zoom-out">
          <span className="flex justify-center">
            <FaLaptop size={30} />
          </span>
          <h1 className="font-semibold font-serif text-2xl md:text-4xl pt-3 text-emerald-700">
            Let's Chat!
          </h1>
          <p className="font-light font-sans ">
            Got any query, idea, seeking clarification or collaboration? Reach
            out and let us build each other through creative solutions!
          </p>
        </div>
        <div>
          <div data-aos="zoom-in">
            <form
              action=""
              className="outline outline-gray-300 p-2 rounded-lg "
            >
              <div className="flex flex-col ">
                <label
                  htmlFor="name"
                  className="font-light font-serif text-xl p-3"
                >
                  Full Name:{" "}
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="p-3 bg-gray-200 rounded-xl m-2"
                />
              </div>
              <div className="flex flex-col ">
                <label
                  htmlFor="email"
                  className="font-light font-serif text-xl p-3"
                >
                  Email Address:{" "}
                </label>
                <input
                  type="email"
                  placeholder="johndoe123@gmail.com"
                  className="p-3 bg-gray-200 rounded-xl m-2"
                />
              </div>
              <div className="flex flex-col ">
                <label
                  htmlFor="phone number"
                  className="font-light font-serif text-xl p-3"
                >
                  Phone Number:{" "}
                </label>
                <input
                  type="tel"
                  placeholder="(+254)7-xx-xxx-xxx"
                  className="p-3 bg-gray-200 rounded-xl m-2"
                />
              </div>
              <div className="flex flex-col ">
                <label
                  htmlFor="full name"
                  className="font-light font-serif text-xl p-3"
                >
                  Message:{" "}
                </label>
                <textarea
                  rows={15}
                  type="text"
                  placeholder="Your message..."
                  className="p-3 bg-gray-200 rounded-xl m-2"
                />
              </div>
              <div className="flex justify-center pt-5 ">
                <button className="bg-gray-800 text-gray-200 py-3 px-5 font-serif font-semibold rounded-2xl cursor-pointer hover:bg-gray-900 hover:text-gray-100 transition-transform duration-300 ease-in-out ">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
