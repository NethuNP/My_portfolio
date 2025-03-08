import React, { useEffect } from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import tailwind from "../assets/tailwind.png";
import react from "../assets/react.png";
import node from "../assets/nodejs.png";
import sql from "../assets/sql.png";
import mongodb from "../assets/mongodb.png";
import wordpress from "../assets/wordpress.png";
import figma from "../assets/Figma.png";
import java from "../assets/java.png";
import php from "../assets/php.png";
import next from "../assets/nextjs.png";
import nest from "../assets/NestJs.png";

import Aos from "aos";
import "aos/dist/aos.css";

const Skils = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  const frontend = [
    { image: html, name: "HTML" },
    { image: css, name: "CSS" },
    { image: javascript, name: "JavaScript" },
    { image: tailwind, name: "Tailwind" },
    { image: react, name: "React" },
    { image: next, name: "Next.js" },
  ];

  const backend = [
    { image: node, name: "Node.js" },
    { image: sql, name: "SQL" },
    { image: mongodb, name: "MongoDB" },
    { image: nest, name: "Nest.js" },
    { image: java, name: "Java" },
    { image: php, name: "PHP" },
  ];

  const tools = [
    { image: wordpress, name: "WordPress" },
    { image: figma, name: "Figma" },
  ];

  return (
    <section
      id="skills"
      className="md:pt-[60px] pt-[60px] flex md:justify-center md:h-screen"
    >
      <div className="rounded-xl shadow-2xl text-gray-300 w-full max-w-[1200px] mx-auto text-center p-8">
        <h2 className="text-4xl font-bold m-4 primary-color p-2" data-aos="zoom-in">
          My Tech Stack
        </h2>
        <div className="flex flex-col gap-8 md:flex-row justify-center items-center mt-8">
          {/* Front-End Section */}
          <div className="flex-1 text-center">
            <h3
              className="text-2xl md:text-2xl mb-6 text-blue-400"
              data-aos="zoom-in"
            >
              Front-End
            </h3>
            <div className="px-8 py-3 border border-gray-600 rounded-xl shadow-lg grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-white transform transition-transform hover:scale-105 duration-300 ease-in-out">
              {frontend.map((item, index) => (
                <div
                  className="flex flex-col items-center m-4 hover:text-blue-400"
                  data-aos="zoom-in"
                  key={index}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px] lg:w-[120px] lg:h-[120px] object-contain"
                  />
                  <p className="mt-2">{item.name}</p>
                </div>
              ))}
            </div>
          </div>
          {/* Back-End Section */}
          <div className="flex-1 text-center">
            <h3
              className="text-2xl md:text-2xl mb-6 text-blue-400"
              data-aos="zoom-in"
            >
              Back-End
            </h3>
            <div className="px-8 py-3 border border-gray-600 rounded-xl shadow-lg grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-white transform transition-transform hover:scale-105 duration-300 ease-in-out">
              {backend.map((item, index) => (
                <div
                  className="flex flex-col items-center m-4 hover:text-blue-400"
                  data-aos="zoom-in"
                  key={index}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px] lg:w-[120px] lg:h-[120px] object-contain"
                  />
                  <p className="mt-2">{item.name}</p>
                </div>
              ))}
            </div>
          </div>{" "}
        </div>

        {/* Tools Section */}
        <div className="flex-1 text-center mt-8">
          <h3
            className="text-2xl md:text-2xl mb-6 text-blue-400"
            data-aos="zoom-in"
          >
            Tools
          </h3>
          <div className="flex justify-center items-center gap-12 mt-8">
            {tools.map((tool, index) => (
              <div
                className="w-[200px] h-[150px] border border-gray-600 rounded-xl shadow-lg flex flex-col justify-between items-center p-6 hover:bg-gray-800 transition duration-300 ease-in-out"
                data-aos="fade-right"
                key={index}
              >
                <img src={tool.image} alt={tool.name} width={80} height={80} />
                <p className="mt-4 text-white hover:text-gray-800">
                  {tool.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skils;
