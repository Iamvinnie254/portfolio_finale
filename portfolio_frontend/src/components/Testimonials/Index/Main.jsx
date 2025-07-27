import React from "react";
import Ratings from "../../../assets/Testimonials/Ratings.png";

const testimonies = [
  {
    id: 1,
    name: "Luca Mwangi",
    position: "CEO - Safari Travellers",
    testimony:
      "“Working with Stephen was an absolute pleasure! From the first consultation to the final launch, he ensured that every detail of my business website was exactly as I envisioned. The design was sleek, professional, and perfectly aligned with my brand. My customers are loving the new look, and the functionality has improved tenfold. I couldn’t be happier!”",
    rating: 5,
  },
  {
    id: 2,
    name: "Jane Akinyi",
    position: "Dishi Kikwetu - CEO",
    testimony:
      "“We needed a website that not only showcased our cause but also allowed us to easily manage our dishes. Stephen delivered beyond our expectations! The site is user-friendly, responsive, and truly captures the spirit of our mission. The feedback from our community has been overwhelmingly positive, and the seamless integration of features has made managing everything so much easier.”",
    rating: 5,
  },
  {
    id: 3,
    name: "Andrew Kibet",
    position: "Designer & Blogger",
    testimony:
      "“As a designer myself, I’m very particular about aesthetics and functionality. Stephen understood my vision from the start and brought it to life with impressive technical expertise. The website feels modern, intuitive, and reflects my personal style perfectly. I’ve already received great feedback from clients, and I highly recommend his services to anyone looking for a professional and creative web developer!”",
    rating: 5,
  },
];

const Main = () => {
  return (
    <div className="bg-gray-200">
      <div className="max-w-screen-xl mx-auto items-center pb-10">
        <div className="text-center px-4 pt-10" data-aos="flip-up">
          <h2 className="uppercase py-4 font-serif">Testimonials</h2>
          <h1 className="text-2xl md:text-4xl font-bold text-emerald-700">
            This is what my clients have to say…
          </h1>
          <p className="font-sans text-lg py-4 font-light">
            Welcome to the testimonials section! Here, you can read firsthand
            experiences and feedback from clients who have partnered with me on
            various web design and development projects.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3">
          {testimonies.map((data) => (
            <div
              className="bg-gray-100 rounded-xl  p-5 m-5 cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out"
              data-aos="zoom-out"
            >
              <img src={Ratings} alt={data.rating} className="py-2" />
              <p className="p-2">{data.testimony}</p>
              <div className="p-3">
                <h2 className="font-semibold font-serif">{data.name}</h2>
                <h3 className="font-light font-sans">{data.position}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
