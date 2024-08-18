import React, { useEffect } from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import tailwnd from "../assets/tailwind.png";
import react from "../assets/react.png";
import node from "../assets/nodejs.png";
import sql from "../assets/sql.png";
import mongodb from "../assets/mongodb.png";
import Aos from "aos";
import "aos/dist/aos.css";

const Skils = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <section
      id="skills"
      className="md:pt-[60px] pt-[60px] flex justify-center"
    >
      <div className="rounded-xl shadow-2xl  text-gray-300 w-full max-w-[1200px] mx-auto text-center p-8">
        <h2
          className="text-4xl font-bold m-4 primary-color"
          data-aos="zoom-in"
        >
          My Tech Stack
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-20 mt-8">
          {/* Front-End Section */}
          <div className="flex-1 text-center">
            <h3
              className="text-2xl md:text-2xl mb-6 text-blue-400"
              data-aos="zoom-in"
            >
              Front-End
            </h3>
            <div className="px-8 py-3 border border-gray-600 rounded-xl shadow-lg grid grid-cols-2 gap-8 text-white transform transition-transform hover:scale-105 duration-300 ease-in-out">
              <div
                className="flex flex-col items-center m-4 hover:text-blue-400"
                data-aos="zoom-in"
              >
                <img src={html} alt="HTML" width={80} height={80} />
                <p className="mt-2">HTML</p>
              </div>

              <div
                className="flex flex-col items-center m-4 hover:text-blue-400"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <img src={css} alt="CSS" width={80} height={80} />
                <p className="mt-2">CSS</p>
              </div>

              <div
                className="flex flex-col items-center m-4 hover:text-blue-400"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <img src={react} alt="React JS" width={80} height={80} />
                <p className="mt-2">React JS</p>
              </div>

              <div
                className="flex flex-col items-center m-4 hover:text-blue-400"
                data-aos="zoom-in"
                data-aos-delay="300"
              >
                <img src={tailwnd} alt="Tailwind" width={80} height={80} />
                <p className="mt-2">Tailwind</p>
              </div>
            </div>
          </div>

          {/* Back-End Section */}
          <div className="flex-1 text-center">
            <h3
              className="text-2xl md:text-2xl mb-6 text-green-400"
              data-aos="zoom-in"
            >
              Back-End
            </h3>
            <div className="px-8 py-3 border border-gray-600 rounded-xl shadow-lg grid grid-cols-2 gap-8 text-white transform transition-transform hover:scale-105 duration-300 ease-in-out">
              <div
                className="flex flex-col items-center m-4 hover:text-blue-400"
                data-aos="zoom-in"
              >
                <img src={node} alt="Node JS" width={80} height={80} />
                <p className="mt-2">Node JS</p>
              </div>

              <div
                className="flex flex-col items-center m-4 hover:text-blue-400"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <img src={javascript} alt="JavaScript" width={80} height={80} />
                <p className="mt-2">JavaScript</p>
              </div>

              <div
                className="flex flex-col items-center m-4 hover:text-blue-400"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <img src={sql} alt="SQL" width={80} height={80} />
                <p className="mt-2">SQL</p>
              </div>

              <div
                className="flex flex-col items-center m-4 hover:text-blue-400"
                data-aos="zoom-in"
                data-aos-delay="300"
              >
                <img src={mongodb} alt="Mongo DB" width={80} height={80} />
                <p className="mt-2">Mongo DB</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skils;
