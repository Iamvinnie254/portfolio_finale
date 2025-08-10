import React from "react";

const experiences = [
  {
    id: 1,
    year: "2024",
    role: "Junior Full Stack Engineer",
    company: "Vintage Solutions",
    location: "Nairobi, Kenya",
    description:
      "Built microservices using Laravel & Vue.Js, improving system modularity and scalability.",
  },
  {
    id: 2,
    year: "2025",
    role: "Backend Engineer",
    company: "Nutripoa Ltd",
    location: "Kiambu, Kenya",
    description:
      "Collaborated with UX designers to build responsive UIs with Tailwind CSS, enhancing user engagement.",
  },
];

const Main = () => {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto ">
        {experiences.map((experience) => (
          <div key={experience.id} className="flex flex-col md:flex-row ">
            <div className="bg-gray-200 rounded-lg p-2 m-3 w-[200px] text-center">
              <h1>{experience.year}</h1>
              <h2>{experience.role}</h2>
              <h1>{experience.company}</h1>
              <h2>{experience.location}</h2>
            </div>
            <div className="items-center">
              <p className="grid justify-center p-5">{experience.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
