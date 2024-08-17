import React, { useEffect } from "react";
import proj1 from "../assets/JobPortal.png";
import proj2 from "../assets/proj2.PNG";
import { MdOpenInNew } from "react-icons/md";
import Aos from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <div
      className="max-w-[1200px] mx-auto p-5 md:pt-[120px] pt-[100px]"
      id="projects"
    >
      <div className="pb-8 text-center">
        <p className="text-4xl mb-3 font-bold primary-color" data-aos="zoom-in">
          My Projects
        </p>
        <p className="text-gray-400 hover:text-white mt-2" data-aos="zoom-in">
          Check out some of my recent individual projects here and you can find
          out my other group projects following my GitHub.
        </p>
      </div>

      <div
        className="grid sm:grid-cols-3 md:grid-cols-2 gap-8 mt-6"
        data-aos="fade-up"
      >
        {/* Project 1 */}
        <div className="relative group rounded-lg shadow-lg overflow-hidden">
          <img
            src={proj1}
            alt="Job Portal"
            className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-80 transition duration-500"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition duration-500">
            <h3 className="text-2xl font-bold text-white mb-4">
              MERN Job Portal
            </h3>
            <a
              href="https://github.com/NethuNP/Job-Portal-react-project-Individual-"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="flex items-center text-white bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full transition duration-300">
                View Project <MdOpenInNew className="ml-2" />
              </button>
            </a>
          </div>
        </div>

        {/* Project 2 */}
        <div className="relative group rounded-lg shadow-lg overflow-hidden">
          <img
            src={proj2}
            alt="Portfolio"
            className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-80 transition duration-500"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition duration-500">
            <h3 className="text-2xl font-bold text-white mb-4">My Portfolio</h3>
            <a
              href="https://github.com/NethuNP/My_portfolio"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="flex items-center text-white bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full transition duration-300">
                View Project <MdOpenInNew className="ml-2" />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
