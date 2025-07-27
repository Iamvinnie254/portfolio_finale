import React from "react";
import { useQuery } from "@apollo/client";
import { GET_TRUSTEES } from "../../../graphql/Queries/GET_TRUSTEES";

const Main = () => {
  const { loading, error, data } = useQuery(GET_TRUSTEES);

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
    <div className=" bg-gray-300 text-gray-900 px-3">
      <div className="max-w-screen-xl mx-auto">
        <div className="">
          <h1 className="uppercase text-center pt-10 font-semibold text-shadow-gray-900  ">
            {" "}
            Trusted by 20+ professionals
          </h1>
        </div>
        <div className="flex gap-5 pb-5">
          {data.trustees.map((trustee) => (
            <div key={trustee.id} className="flex gap-2 items-center">
              {console.log("url:", trustee.logo)}
              <img
                src={trustee.logo}
                alt={trustee.name}
                className="md:w-[100px] w-[50px] h-[60px] pt-5 rounded-2xl"
                data-aos="zoom-in"
              />
              {/* <h3>{trustee.name}</h3> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
