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
      className="md:pt-[120px] pt-[100px] flex justify-center"
    >
      <div className="rounded-xl shadow-2xl bg-black text-gray-400 w-full max-w-[1200px] mx-auto text-center">
        <h2
          className="text-gray-400 text-4xl font-bold m-4 primary-color"
          data-aos="zoom-in"
        >
          My Tech Stack
        </h2>
        <br />
        <div className="flex flex-col md:flex-row justify-center items-center gap-20">
          {/* Front-End Section */}
          <div className="flex-1 text-center">
            <h3
              className="text-2xl md:text-2xl m-4 text-blue-400"
              data-aos="zoom-in"
            >
              Front-End
            </h3>
            <div className="px-8 py-3 border border-gray-600 rounded-xl shadow-3xl grid grid-cols-2 gap-8 text-white">
              <div
                className="flex flex-col items-center m-4 sm:my-0"
                data-aos="zoom-out"
              >
                <img src={html} alt="HTML" width={80} height={80} />
                <p className="mt-2">HTML</p>
              </div>

              <div
                className="flex flex-col items-center m-4 sm:my-0"
                data-aos="zoom-out"
              >
                <img src={css} alt="CSS" width={80} height={80} />
                <p className="mt-2">CSS</p>
              </div>

              <div
                className="flex flex-col items-center m-4 sm:my-0"
                data-aos="zoom-out"
              >
                <img src={react} alt="React JS" width={80} height={80} />
                <p className="mt-2">React JS</p>
              </div>

              <div
                className="flex flex-col items-center m-4 sm:my-0"
                data-aos="zoom-out"
              >
                <img src={tailwnd} alt="Tailwind" width={80} height={80} />
                <p className="mt-2">Tailwind</p>
              </div>
            </div>
          </div>

          {/* Back-End Section */}
          <div className="flex-1 text-center">
            <h3
              className="text-2xl md:text-2xl m-4 text-blue-400"
              data-aos="zoom-in"
            >
              Back-End
            </h3>
            <div className="px-8 py-3 border border-gray-600 rounded-xl shadow-3xl grid grid-cols-2 gap-8 text-white">
              <div
                className="flex flex-col items-center m-4 sm:my-0"
                data-aos="zoom-in"
              >
                <img src={node} alt="Node JS" width={80} height={80} />
                <p className="mt-2">Node JS</p>
              </div>

              <div
                className="flex flex-col items-center m-4 sm:my-0"
                data-aos="zoom-in"
              >
                <img src={javascript} alt="JavaScript" width={80} height={80} />
                <p className="mt-2">JavaScript</p>
              </div>

              <div
                className="flex flex-col items-center m-4 sm:my-0"
                data-aos="zoom-in"
              >
                <img src={sql} alt="SQL" width={80} height={80} />
                <p className="mt-2">SQL</p>
              </div>

              <div
                className="flex flex-col items-center m-4 sm:my-0"
                data-aos="zoom-in"
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
