import React, { useEffect } from "react";
import AboutImg from "../assets/NewMe (4).png";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <div
      className="text-white max-w-[1200px] mx-auto md:pt-[120px] pt-[100px]"
      id="about"
    >
      <div className="md:grid md:grid-cols-2 sm:py-16 bg-gray-900 p-5 rounded-3xl">
        <div className="mt-4 md:mt-0 text-left flex">
          <div className="my-auto mx-6">
            <h2
              className="text-4xl font-bold mb-4 primary-color"
              data-aos="zoom-in"
            >
              About Me
            </h2>
            <p className="text-base lg:text-lg" data-aos="zoom-in">
              I am a dedicated student currently pursuing a Higher National
              Diploma in Information Technology at the Advanced Technological
              Institute - Gampaha. I am seeking an internship opportunity to
              fulfill my diploma requirements. My studies have provided me with
              a strong foundation in Software Engineering, Machine Learning,
              Software Quality Assurance, Enterprise Architecture, and other key
              subjects.
            </p>
          </div>
        </div>
        <img
          className="mx-auto shadow-2xl rounded-full py-8 md:py-0"
          src={AboutImg}
          width={300}
          height={300}
        />
      </div>
    </div>
  );
};

export default About;
