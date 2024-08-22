import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="bg-black h-[100px] text-gray-400 max-w-[1200px] mx-auto flex justify-between items-center">
      
        <h1 className="text-3xl font-bold primary-color">Nethmini Prabodha</h1>
        <ul className="hidden md:flex">
          <li className="p-5  hover:text-blue-400">
            <a href="#hero">Home</a>
          </li>
          <li className="p-5 hover:text-blue-400">
            <a href="#skills">Skills</a>
          </li>
          <li className="p-5 hover:text-blue-400">
            <a href="#about">About</a>
          </li>
          <li className="p-5 hover:text-blue-400">
            <a href="#projects">My Projects</a>
          </li>
          <li className="p-5 hover:text-blue-400">
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <div onClick={handleNav} className="block md:hidden">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
      

      {/* Mobile Menu */}
      <div
        className={
          nav
            ? "fixed h-full left-0 top-0 w-[60%] bg-[#202121] z-10 ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="text-3xl primary-color m-4">Nethmini Prabodha</h1>
        <ul className="pt-8 text-2xl">
          <li className="p-2">
            <a href="#hero" onClick={handleNav}>
              Home
            </a>
          </li>

          <li className="p-2">
            <a href="#skills" onClick={handleNav}>
              Skills
            </a>
          </li>
          <li className="p-2">
            <a href="#about" onClick={handleNav}>
              About
            </a>
          </li>
          <li className="p-2">
            <a href="#projects" onClick={handleNav}>
              My Projects
            </a>
          </li>
          <li className="p-2">
            <a href="#contact" onClick={handleNav}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
