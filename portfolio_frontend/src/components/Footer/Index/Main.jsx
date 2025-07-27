import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router";

const Main = () => {
  return (
    <div className="bg-gray-900 text-gray-200">
      <div className="max-w-screen-xl mx-auto pt-8 px-3 gap-5 grid grid-cols-1 md:grid-cols-4">
        <div>
          <h1 className="text-xl font-serif font-bold">Follow Me!</h1>
          <div className="flex gap-3 py-3 text-gray-400">
            <Link to="">
              <FaGithub size={25} />
            </Link>
            <Link to="">
              <FaLinkedin size={25} />
            </Link>
            <Link to="">
              <FaXTwitter size={25} />
            </Link>
            <Link to="">
              <FaWhatsapp size={25} />
            </Link>
          </div>
        </div>
        <div>
          <h1 className="text-xl font-serif font-bold">My Services</h1>
          <div className="flex flex-col gap-2 py-3 text-gray-400">
            <Link
              to="/contact"
              className="hover:text-gray-700 transform-3d duration-300 "
            >
              Web design
            </Link>
            <Link
              to="/contact"
              className="hover:text-gray-700 transform-3d duration-300 "
            >
              Web Development
            </Link>
            <Link
              to="/contact"
              className="hover:text-gray-700 transform-3d duration-300 "
            >
              Database design
            </Link>
            <Link
              to="/contact"
              className="hover:text-gray-700 transform-3d duration-300 "
            >
              API Integration
            </Link>
            <Link
              to="/contact"
              className="hover:text-gray-700 transform-3d duration-300 "
            >
              UI/UX
            </Link>
            <Link
              to="/contact"
              className="hover:text-gray-700 transform-3d duration-300 "
            >
              System Analysis
            </Link>
          </div>
        </div>
        <div>
          <h1 className="text-xl font-serif font-bold">Quick Links</h1>
          <div className="flex flex-col gap-2 py-3 text-gray-400">
            <Link
              to="/"
              className="hover:text-gray-700 transform-3d duration-300 "
            >
              Home
            </Link>
            <Link
              to="/portfolio"
              className="hover:text-gray-700 transform-3d duration-300 "
            >
              My Projects
            </Link>
            <Link
              to="/resume"
              className="hover:text-gray-700 transform-3d duration-300 "
            >
              Resume
            </Link>
            <Link
              to="/services"
              className="hover:text-gray-700 transform-3d duration-300 "
            >
              My Services
            </Link>
            <Link
              to="/blogs"
              className="hover:text-gray-700 transform-3d duration-300 "
            >
              Blogs
            </Link>
            <Link
              to="/contact"
              className="hover:text-gray-700 transform-3d duration-300 "
            >
              Let's Chat
            </Link>
          </div>
        </div>
        <div>
          <h1 className="text-xl font-serif font-bold">Resourcess</h1>
          <div className="flex flex-col gap-2 py-3 text-gray-400">
            <Link
              to="/"
              className="hover:text-gray-700 transform-3d duration-300 "
            >
              Terms & Conditions
            </Link>
            <Link
              to="/"
              className="hover:text-gray-700 transform-3d duration-300 "
            >
              Privacy Policy
            </Link>
            <Link
              to="/"
              className="hover:text-gray-700 transform-3d duration-300 "
            >
              Knowledge Base
            </Link>
            <Link
              to="/"
              className="hover:text-gray-700 transform-3d duration-300 "
            >
              Support
            </Link>
          </div>
        </div>
      </div>
      <hr className="max-w-screen-xl mx-auto text-gray-500" />
      <div className="font-light text-center md:text-start  pt-2 max-w-screen-xl mx-auto">
        <p>Copyright &copy; {new Date().getFullYear()}</p>
      </div>
    </div>
  );
};

export default Main;
