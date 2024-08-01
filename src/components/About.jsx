import React, { useEffect } from 'react'
import AboutImg from '../assets/NewMe (4).png'
import Aos from "aos"
import "aos/dist/aos.css";




const About = () => {

  useEffect(() => {
    Aos.init({duration:3000})
  }, [])

  return (
    <div className='text-white max-w-[1200px] mx-auto my-12' id="about">
      <div className='md:grid md:grid-cols-2 sm:py-16'>
        <div className='mt-4 md:mt-0 text-left flex'>
          <div className='my-auto mx-6'>
            <h2 className='text-4xl font-bold mb-4 primary-color'data-aos="zoom-in">About Me</h2>
            <p className='text-base lg:text-lg align-middle'data-aos="zoom-in">
            I am a dedicated and skilled student currently pursuing a Higher
 National Diploma in Information Technology in Advanced Technological Institue - Gampaha. I am actively seeking  an
 internship opportunity to fulfill the requirements of my diploma programme.My academic background has equipped me with a solid foundation in Software Engineering, Machine Learning, Software Quality Assurance, Enterprise Architecture, and other relevant subjects. 
            </p>
          </div>
        </div>
        <img className='mx-auto rounded-full py-8 md:py-0' src={AboutImg} width={300} height={300}/>
      </div>
    </div>
  )
}

export default About