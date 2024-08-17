import React from "react";
import { TypeAnimation } from "react-type-animation";
import heroimage from "../assets/meee.png";

const Hero = () => {
  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] md:h-[70vh] mx-auto py-8 bg-black md:pt-[160px] pt-[120px]"
      id="hero"
    >
      <div className="col-span-1 my-auto mx-auto w-[300px] h-auto lg:w-[400px]">
        <img src={heroimage} alt="hero image" />
      </div>

      <div className="col-span-2 px-5 my-auto">
        <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold">
          <span className="primary-color"> I'm a</span>
          <br />
          <TypeAnimation
            sequence={["Full Stack Developer", 1000, "UI / UX Designer", 1000]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>
        <p className="text-gray-400 sm:text-lg my-6 lg:text-xl">
          I'm Nethmini Prabodha and I am looking for Internship as Full-Stack
          developer or UI/UX Designer.
        </p>

        <div className="my-10">
          <a
            href="https://drive.google.com/file/d/1lkzuQQ1iCxP_qjtjzEcpv6eFSP_KYVG9/view?usp=drivesdk"
            className="px-6 py-3 w-full rounded-xl mr-4 bg-gradient-to-br from-blue-400 to-pink-600 text-white"
          >
            Download CV
          </a>
          <a
            href="#contact"
            className="px-6 py-3 w-full rounded-xl mr-4 border border-gray-400 hover:bg-gradient-to-br from-blue-400 to-pink-600 text-white hover:border-none"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
