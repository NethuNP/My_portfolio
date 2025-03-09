import React from "react";
import { TypeAnimation } from "react-type-animation";
import heroimage from "../assets/me22.jpg";

const Hero = () => {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 container mx-auto gap-6 md:h-screen py-8 bg-black md:pt-[160px] pt-[100px] items-center"
      id="hero"
    >
      {/* Image Section */}
      <div className="flex justify-center items-center">
        <img
          src={heroimage}
          alt="Nethmini Prabodha"
          className="md:w-[400px] w-[250px] h-auto p-6 md:p-0"
        />
      </div>

      {/* Text Section */}
      <div className="flex flex-col text-center md:text-start">
        <div className="text-white text-2xl  md:text-[60px] font-extrabold leading-tight">
          <span className="primary-color">I'm a</span>
          <br />
          <div className="mt-4">
            <TypeAnimation
              sequence={["Full Stack Developer", 1000, "MERN Stack Developer", 1000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>
        </div>

        <p className="text-gray-400 text-base sm:text-lg md:text-xl leading-relaxed p-6 md:p-0 mt-4">
          I'm Nethmini Prabodha, and I'm interested in MERN Stack development.
        </p>

        {/* Buttons Section */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4 md:my-10">
          <a
            href="https://drive.google.com/file/d/17E6xqYn6wfj3ZPn_mibWJiVpN9HfJLgd/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 sm:px-6 sm:py-3 rounded-xl bg-gradient-to-br from-blue-400 to-pink-600 text-white font-medium hover:scale-105 transition-transform"
          >
            Download CV
          </a>
          <a
            href="#contact"
            className="px-5 py-3 sm:px-6 sm:py-3 rounded-xl border border-gray-400 text-white font-medium hover:bg-gradient-to-br from-blue-400 to-pink-600 hover:border-none hover:scale-105 transition-transform"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
