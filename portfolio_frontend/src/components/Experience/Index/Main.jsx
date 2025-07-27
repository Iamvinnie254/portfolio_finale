import React from "react";
import { useQuery } from "@apollo/client";
import { GET_DETAILS } from "../../../graphql/Queries/GET_DETAILS";
import { Link } from "react-router";

const Main = () => {
  const { loading, error, data } = useQuery(GET_DETAILS);

  const getFullUrl = (path) => {
    if (!path) return "";
    return path.startsWith("http") ? path : `${baseUrl}${path}`;
  };
  if (loading)
    return (
      <p className="grid place-items-center text-4xl font-sans font-semibold min-h-[80vh]">
        Just a moment...
      </p>
    );
  if (error)
    return (
      <p className="grid place-items-center text-4xl font-sans font-semibold min-h-[80vh]">
        {" "}
        Please try again later...
      </p>
    );
  return (
    <div>
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center pt-10">
          <h1 className="font-bold text-2xl md:text-3xl text-emerald-700 ">
            Resume
          </h1>
          <h3 className="font-semibold text-gray-700  pt-2 text-lg md:text-xl ">
            A Glimpse Into My professional Journey
          </h3>
          <p className="font-light text-gray-600 pt-4 ">
            Below is my up-to-date resume detailing my skills, experience,
            education, and relevant accomplishments.
          </p>
        </div>
        <div className="flex justify-between items-center py-8 px-5 ">
          <h1 className="text-2xl md:text-4xl font-serif ont-semibold text-shadow-zinc-700">
            Experience
          </h1>
          <div>
            {data.user_details.map((detail) => (
              <div
                key={detail.id}
                className="bg-gray-50 rounded-xl shadow-md overflow-hidden hover:shadow-lg cursor-pointer transition duration-300"
                data-aos="zoom-out"
              >
                <a
                  href={getFullUrl(detail.cv)}
                  download={detail.cv}
                  className="inline-flex items-center  gap-2 px-6 py-3 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition duration-300"
                  target="_blank"
                >
                  Download CV
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
