import React from "react";
import { useQuery } from "@apollo/client";
import { GET_BLOGS } from "../../../graphql/Queries/GET_BLOGS";
import { FaExternalLinkAlt } from "react-icons/fa";
import ReactMarkdown from "react-markdown";

const Main = () => {
  const { loading, error, data } = useQuery(GET_BLOGS);

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
    <div className="bg-white py-16 px-4 md:px-12 lg:px-20">
      <div className="text-center max-w-3xl mx-auto mb-12" data-aos="flip-up">
        <h2 className="font-bold text-2xl md:text-3xl text-emerald-700">
          Tech Blog
        </h2>
        <p className="font-light text-gray-600 pt-4">
          Stay updated with the latest in tech. Filter by tags, search for
          topics, or read full articles.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-gray-50 rounded-xl shadow-md overflow-hidden hover:shadow-lg cursor-pointer transition duration-300"
            data-aos="zoom-out"
          >
            {console.log(blog.image)}
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                {blog.title}
              </h3>
              <span className="text-sm text-gray-600 mb-4">
                <ReactMarkdown>{blog.markdown}</ReactMarkdown>
              </span>

              <div className="flex flex-wrap gap-2 mb-4 mt-5">
                <span className="px-2 py-1 text-xs bg-emerald-100 text-emerald-700 rounded-full">
                  {blog.tags}
                </span>
              </div>

              <a
                href={blog.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-emerald-700 font-medium hover:underline"
              >
                Read Full Article <FaExternalLinkAlt className="ml-2 text-xs" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
