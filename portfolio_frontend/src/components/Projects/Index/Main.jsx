import React from "react";
import { useQuery } from "@apollo/client";
import { GET_PROJECTS } from "../../../graphql/Queries/GET_PROJECTS";
import { Link } from "react-router";

const Main = () => {
  const { loading, error, data } = useQuery(GET_PROJECTS);

  if (loading)
    return (
      <p className="grid place-items-center text-xl font-sans font-semibold py-15">
        Loading...
      </p>
    );
  if (error)
    return (
      <p className="grid place-items-center text-xl font-sans font-semibold ">
        {" "}
        Error: {error.message}
      </p>
    );
  return (
    <div>
      <div>{/* Some classy into goes here for projects page */}</div>
      <div>
        {data.projects.map((project) => (
          <div key={project.id}>
            <h1>{project.title}</h1>
            <img src={project.project_preview_image} alt="" />
            <div>
              <Link to={project.live_demo_url}>
                {" "}
                <button>Live Demo</button>
              </Link>
              <Link to={project.source_code_url}>
                <button>View Source Code</button>
              </Link>
            </div>
            <div>
              <h2>{project.tech_stack}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
