import React , { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";


const Experiences = () => {

   useEffect(() => {
      Aos.init({ duration: 3000 });
    }, []);

  return (
    <div
      className="container mx-auto text-center max-w-[1200px] min-h-screen flex flex-col justify-center items-center p-6 md:p-8"
      id="experience"
    >
      {/* Title */}
      <div className="primary-color text-3xl sm:text-4xl font-bold p-2" data-aos="zoom-in">
        My Work Experience
      </div>

      {/* Experience Card */}
      <div className="flex justify-center flex-col bg-gray-900 border border-slate-600 md:h-[500px] p-5 md:p-8 rounded-3xl mt-10 w-full">
        <div className="text-pink-600 text-xl sm:text-2xl font-semibold text-center" data-aos="zoom-in">
          Intern Software Developer
        </div>
        <div className="flex flex-col sm:flex-row justify-between text-blue-400 text-lg sm:text-xl mt-4 text-center sm:text-left" data-aos="zoom-in">
          <span>Cypso Labs (Pvt) Ltd</span>
          <span>Sep 2024 - Present</span>
        </div>
        <div className="text-white text-[16px] sm:text-lg md:text-xl  text-justify md:mt-4 leading-relaxed" data-aos="zoom-in">
          Successfully completed an intensive internship, working on 4+ projects utilizing MERN stack (MongoDB, Express.js, React, Node.js) and Next.js. 
          Gained hands-on experience in both frontend and backend development, ensuring high-performance, scalable, and maintainable applications. 
          Focused on writing clean, efficient, and reusable code, following industry best practices for code quality, version control (Git), and agile methodologies. 
          Collaborated with cross-functional teams to implement user-friendly features, optimize APIs, and enhance application security. 
          Passionate about problem-solving and continuous learning in modern web development.
        </div>
      </div>
    </div>
  );
};

export default Experiences;
