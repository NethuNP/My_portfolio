import React, { useEffect } from 'react'
import proj1 from '../assets/JobPortal.png';
import proj2 from '../assets/port.PNG';
import { MdOpenInNew } from 'react-icons/md';
import Aos from "aos"
import "aos/dist/aos.css";

const Projects = () => {

  useEffect(() => {
    Aos.init({duration:3000})
  }, [])

  return (
    <div className='max-w-[1200px] mx-auto p-5' id='projects'>
      <div className='pb-8'>
        <p className='text-4xl mb-3 font-bold primary-color'data-aos="zoom-in">My Projects</p>
        <p className='text-gray-400 hover:text-white'data-aos="zoom-in">Check out some of my recent individual projects here and you can find out my other group projects following my GitHub.
        </p>
      </div>

      <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'data-aos="fade-up">
        {/* Project 1 */}
        <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center h-[200px] bg-cover relative'>
          <img src={proj1} alt='Job Portal' className='w-full h-full object-cover'/>
          <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
            <span className='text-2xl font-bold text-white tracking-wider'>MERN Job Portal</span>
            <a href='https://github.com/NethuNP/Job-Portal-react-project-Individual-'>
              <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                <MdOpenInNew />
              </button>
            </a>
          </div>
        </div>

        {/* Project 2 */}
        <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center h-[200px] bg-cover relative'>
          <img src={proj2} alt='Portfolio' className='w-full h-full object-cover'/>
          <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
            <span className='text-2xl font-bold text-white tracking-wider'>My Portfolio</span>
            <a href='https://github.com/NethuNP/Portfolio'>
              <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                <MdOpenInNew />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
