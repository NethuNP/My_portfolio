import React, { useEffect } from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import tailwnd from '../assets/tailwind.png'
import react from '../assets/react.png'
import Aos from "aos"
import "aos/dist/aos.css";

const Skils = () => {

  useEffect(() => {
    Aos.init({duration:3000})
  }, [])

  return (
    <section id="skills">
    <div className='rounded-xl shadow-2xl bg-black text-gray-400 md:h-[150px] max-w-[1200px] mx-auto grid grid-cols-6 place-items-center md:flex md:justify-between md:items-center'>
  <h2 className='text-gray-400 text-xl md:text-4xl font-bold m-4 primary-color'data-aos="zoom-in">
    Tech Stack 
     
  </h2>

  <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'data-aos="fade-up">
    <img src={html} alt='' width={80} height={80}/>
    <p className='mt-2'>HTML</p>
  </div>

  <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'data-aos="fade-up">
    <img src={css} alt='' width={80} height={80}/>
    <p className='mt-2'>CSS</p>
  </div>

  

  <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'data-aos="fade-up">
    <img src={react} alt='' width={80} height={80}/>
    <p className='mt-2'>React JS</p>
  </div>

  <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'data-aos="fade-up">
    <img src={tailwnd} alt='' width={80} height={80}/>
    <p className='mt-2'>Tailwind</p>
  </div>

  <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'data-aos="fade-up">
    <img src={javascript} alt='' width={80} height={80}/>
    <p className='mt-2'>JavaScript</p>
  </div>

    </div>
    </section>
  )
}

export default Skils