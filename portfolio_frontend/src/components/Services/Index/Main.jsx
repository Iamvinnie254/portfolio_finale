import React from "react";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaPaintBrush,
  FaDatabase,
} from "react-icons/fa"; // Use 'fa' not 'fa6'

const services = [
  {
    icon: <FaLaptopCode className="text-4xl text-emerald-700 mb-4" />,
    title: "Web Design",
    description:
      "Modern, responsive, and user-friendly websites tailored to your brand and audience. From personal portfolios to corporate sites.",
  },
  {
    icon: <FaMobileAlt className="text-4xl text-emerald-700 mb-4" />,
    title: "Mobile Development",
    description:
      "Cross-platform mobile app development using cutting-edge frameworks, ensuring seamless user experience on all devices.",
  },
  {
    icon: <FaPaintBrush className="text-4xl text-emerald-700 mb-4" />,
    title: "UI/UX Design",
    description:
      "Visually engaging and intuitive interfaces. I ensure your product not only works well, but feels great to use.",
  },
  {
    icon: <FaDatabase className="text-4xl text-emerald-700 mb-4" />,
    title: "Database Systems",
    description:
      "Efficient and scalable database design and integration for applications, including inventory and learning systems.",
  },
];

const Main = () => {
  return (
    <div className="bg-white py-16 px-4 md:px-12 lg:px-20">
      <div className="text-center max-w-3xl mx-auto mb-12" data-aos="flip-down">
        <h2 className="font-bold font-serif text-2xl md:text-3xl text-emerald-700">
          My Services
        </h2>
        <h1 className="font-semibold text-gray-700 pt-2 text-lg md:text-xl">
          Asking yourself what I offer?
        </h1>
        <p className="font-light text-gray-600 pt-4">
          This is a detailed breakdown of my services and solutions that I bring
          to the table. Be it a personal website, business website, inventory
          systems, or learning management systems—I've got you covered!
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 cursor-pointer ">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-2xl p-6 text-center shadow-md hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out"
            data-aos="zoom-in"
          >
            <span className="flex justify-center"> {service.icon}</span>
            <h3 className="font-semibold text-lg text-gray-800 mb-2">
              {service.title}
            </h3>
            <p className="text-sm text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
