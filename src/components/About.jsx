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
      className="text-white max-w-[1200px] mx-auto md:pt-[120px] pt-[100px] md:h-screen flex md:items-center md:justify-center"
      id="about"
    >
      <div className="md:grid md:grid-cols-2  bg-gray-900 border border-slate-600 shadow-2xl md:p-5 p-2 md:h-[500px] rounded-3xl mx-2 md:mx-0">
        <div className="mt-4 md:mt-0 text-left flex">
          <div className="my-auto mx-6">
            <h2
              className="text-4xl font-bold mb-4 primary-color"
              data-aos="zoom-in"
            >
              About Me
            </h2>
            <p className="text-base lg:text-lg text-justify" data-aos="zoom-in">
              I am a dedicated student currently pursuing a Higher National
              Diploma in Information Technology at the Advanced Technological
              Institute - Gampaha. I am completed six months internship programme at 
              the Cypso Labs (Pvt) Ltd. I am a self-motivated individual who is
              always looking for opportunities to learn and grow. I am
              passionate about web development and have a strong interest in 
              software development. I am always looking for new challenges and
              opportunities to improve my skills and knowledge.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
        <img
          className="mx-auto  rounded-full py-8 md:py-0 "
          src={AboutImg}
          width={300}
          height={300}
        />
      </div> </div>
    </div>
  );
};

export default About;
